var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname)));
app.get('/', function(req, res) {
  fs.createReadStream("./index.html").pipe(res);
});
app.listen(80);