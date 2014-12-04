var express    = require('express');    // call express
var app        = express(); 
var router = require('./routes.js')

var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);

// apply the routes to our application
app.use('/', router);