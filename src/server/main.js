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

io.on('connection', (socket) => {
  let room = socket.handshake.query.room;
  socket.join(room);
  socket.on('timeline', (data) => {
    socket.to(room).emit('timeline', data);
  });
});

http.listen(port, () => console.log('listening on port ' + port));