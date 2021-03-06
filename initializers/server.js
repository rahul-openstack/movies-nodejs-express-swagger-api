
var express = require('express');
var path = require('path');
// Local dependecies
var config = require('nconf');

// create the express app
// configure middlewares
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('winston');
var mongoose = require('mongoose');

var app;

var start =  function(cb) {
  'use strict';
  // Configure express 
  app = express();

  app.use(morgan('common'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({ type: '*/*' }));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(express.static(__dirname + '/public'));


  mongoose.connect(config.get('mongo:database'));

  logger.info('[SERVER] Initializing routes');

  require('../app/routes/index.js')(app);


// =======================
// start the server ======
    // =======================
  var port = process.env.PORT || config.get('app:port');
  console.log(port);
  app.listen(port);
  logger.info('[SERVER] Listening on port ' + config.get('app:port'));
  
  if (cb) {
    return cb();
  }
};

module.exports = start;

