// modules =================================================
var express        = require('express');
var app            = express();

// set port
var port = process.env.PORT || 8080;

// set the static files location
app.use(express.static(__dirname + '/api/src'));

// routes ==================================================
var route = require('./routes');
route(app);

// start app ===============================================
var server = app.listen(port);


// Console.log
console.log('MyApp Runs on  ' + port);
