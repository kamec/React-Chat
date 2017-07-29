const path = require('path');
const app = require('express')();

const server = require('http').Server(app); 
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index-stub.html'));
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

  socket.on('chat message', data => {
    const userName = socket.id % 100;
    socket.broadcast.emit('message', `#${userName}: ${data}`);
    console.log(`message: ${data}`);
  });
});
