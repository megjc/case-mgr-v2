'use strict'
const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      routes = require('./routes/index'),
      srcDir = __dirname + "/src/"

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';


app.use(bodyParser.json());
app.use(express.static(srcDir));
app.set('port', process.env.PORT || 3000);

app.use('/', routes);

module.exports = app;
