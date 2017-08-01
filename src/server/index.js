const path = require('path');
const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../ui/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/build/index.html'));
});

server.listen(4000, function() {
  console.log('listening on *:4000');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.id = Date.now();

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });

  socket.on('chat message', message => {
    const date = new Date();
    socket.broadcast.emit(
      'message',
      Object.assign({}, message, { date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` })
    );
    console.log(`message: ${message.data}\nname: ${message.name}`);
  });
});
