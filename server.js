var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Index Page');
});

var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application is active on the port: ' + port);
});