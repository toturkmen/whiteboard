const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client')));

io.on('connection', (socket) => {
  socket.on('timeline', (data) => {
    socket.emit('timeline', data);
  });
});

http.listen(port, () => console.log('listening on port ' + port));