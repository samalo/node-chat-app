var socket = io();

socket.on('connect', function(){
  console.log('Connected to the server!');

  socket.emit('createMessage', {
    from: 'Sam',
    text: 'Yup, that works for me'
  })
});

socket.on('disconnect', function(){
  console.log('Disconnect from server!');
});

socket.on('newMessage', function(message){
 console.log('newMessage', message);
});