var express = require('express');
var fs = require('fs');

var buffer = new Buffer (30);

var app = express.createServer(express.logger());


var content = fs.readFileSync("indexx.html");

var data = buffer.toString("utf-8",content);
     
      console.log(data);


app.get('/', function(request, response) {
    
      response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});





