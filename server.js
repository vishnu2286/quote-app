const http = require('http');

var server = http.createServer(function(req,res){
  res.end('Hello World');
} )
var port = process.env.PORT || 8080;
server.listen(port);
