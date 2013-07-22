var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//for later use, seems tried to hard:D
//app.configure(function(){
//app.use(express.static(__dirname + '/public/docs/'));
//});

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf-8')) ;
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
