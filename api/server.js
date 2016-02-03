// modules ========================================================
var express        = require('express');
var app            = express();
var mongoose 	   = require('mongoose');

// server configuration ===========================================
var db = require('./config/transport.server.db');

// server port
var port = process.env.PORT || 8080;

// server routes ==================================================
var route = require('./routes/transport.server.routes');
route(app);

// start server ===================================================
var server = app.listen(port);

//connect MongoDB 
mongoose.connect(db.url);

// Log ============================================================
console.log('MyTransport Runs on  ' + port);
