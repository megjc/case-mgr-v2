'use strict'
const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      /************* Endpoints ****************
       ****************************************/
      routes = require('./routes/index'),
      /********** End of Endpoints ************
       ****************************************/
      srcDir = __dirname + "/src/"

var app = express();


var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(express.static(srcDir));
app.set('port', process.env.PORT || 3000);

app.use('/', routes);

module.exports = app;
