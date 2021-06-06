const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, './../client')));

app.get('/:room', function (request, response) {
  response.sendFile(path.resolve(__dirname, './../client/index.html'));
});

let rooms = {};
io.on('connection', (socket) => {
  let room = socket.handshake.query.room;
  if (! rooms[room]) {
    rooms[room] = {
      users: 0,
      timeline: []
    };
  }
  socket.join(room);
  rooms[room].users++;
  io.to(socket.id).emit('timeline', rooms[room].timeline);
  socket.on('load', (data) => {
    rooms[room].timeline = data;
    io.to(room).emit('timeline', rooms[room].timeline);
  });
  socket.on('timeline', (data) => {
    rooms[room].timeline.push(data);
    io.to(room).emit('timeline', rooms[room].timeline);
  });
  socket.on('undo', () => {
    for (let index = 1; index <= rooms[room].timeline.length; index++) {
      if (rooms[room].timeline[rooms[room].timeline.length - index].visible) {
        rooms[room].timeline[rooms[room].timeline.length - index].visible = false;
        break;
      }
    }
    io.to(room).emit('timeline', rooms[room].timeline);
  });
  socket.on('redo', () => {
    for (let index = 0; index < rooms[room].timeline.length; index++) {
      if (! rooms[room].timeline[index].visible) {
        rooms[room].timeline[index].visible = true;
        break;
      }
    }
    io.to(room).emit('timeline', rooms[room].timeline);
  });
  socket.on('disconnect', (socket) => {
    rooms[room].users--;
    if (rooms[room].users == 0) {
      rooms[room].timeline = [];
    }
  });
});

http.listen(port, () => console.log('listening on port ' + port));