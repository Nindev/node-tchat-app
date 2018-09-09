
var express = require('express');
var app  = express();

// Express initializes app to be a function handler
// that you can supply to an HTTP server
var http = require('http').Server(app);

// New instance of socket.io by passing the http (the HTTP server) object. 
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

//Middleware to resolve the MIME type ('text/html') is not executable issue
app.use(express.static(__dirname + '/public' ));

// Defining the route handler '/'
// that gets called when we hit our website home
app.get('/', function(req,res){
  res.sendFile('public/index.html', {root : __dirname});
});

// // Add a connect listener
io.on('connection', function(socket) {
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

// Server running on port 3000
http.listen(port, function(){
  console.log('Listening on port: 3000');
});

