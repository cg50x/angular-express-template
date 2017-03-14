//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var config = require('./config');
var server = require('./server');
// TODO Read a config file
// TODO Validate the config file
// TODO config.port, config. other stuff
try {
  var serverConfig = config.load();
  server.listen(serverConfig.port, serverConfig.address, function(){
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
  });
} catch (err) {
  console.error('Error starting service: ' , err);
}