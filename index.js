
var app = require('express')();
var http = require('http').Server(app);

// Express initializes app to be a function handler
// that you can supply to an HTTP server

// Defining the route handler '/'
// that gets called when we hit our website home
app.get('/', function(req,res){
  res.sendFile('/index.html', {root : __dirname});
});

// http server listen on port 3000
http.listen(3000, function(){
  console.log('Listening on port: 3000');
});

