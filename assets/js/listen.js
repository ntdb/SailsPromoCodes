io.connect('http://localhost:1337');
io.socket.on('connect', function() {

  // Implicitly subscribe to Code model events
  io.socket.get('/code');

  // Catch events as they are published
  io.socket.on('code', function(message) {
    var code = message.data;
    console.log('New promotional code created: ' + code.description);
  });

});