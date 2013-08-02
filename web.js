var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
 app.configure(function(){
 app.use(express.static(__dirname + '/dist/'));
 app.use(express.bodyParser());
});

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf-8')) ;
});

app.post('/subscribe', function(request, response) {
   var suldubuldu = request.body;
   console.log(suldubuldu['email_address']);
   fs.appendFileSync("emails.txt", suldubuldu['email_address']+"\n");   
//response.send({
     //retStatus: "Success"
   //});
   response.redirect('/'); 
});
    

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
