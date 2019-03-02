const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; //Just for local

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected!');

  socket.emit('newMessage', {
  from: 'John',
  text: 'See you then',
  createdAt: 123123
  });

 socket.on('createMessage', (message) => {
  console.log('Create messege', message);
 });

  socket.on('disconnect', () => {
  console.log('Browser has been closed!');
  });
});

server.listen(port, () =>{
  console.log(`Server is up on ${port}.`);
})