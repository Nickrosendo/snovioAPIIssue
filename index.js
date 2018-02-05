var express = require('express');
var fs = require('fs');
var app = express();
var path    = require("path");


var PORT = 1001;

app.get('*.*', express.static(__dirname+'/static'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
