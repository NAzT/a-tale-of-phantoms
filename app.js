var request = require("request");
var express = require("express");
var http = require('http');
var path = require('path');

// user config
var base_service_url = "http://ec2-54-251-88-186.ap-southeast-1.compute.amazonaws.com:3000/fb/";

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));

app.get('/:fbuid', function(req, resp) { 
  var fbuid = req.params.fbuid || 'nat.wrw'; 
  request.get(base_service_url+fbuid).pipe(resp); 
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
