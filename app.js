/**
 * Main express application entry point
 * @author Tremaine Buchanan
 */
'use strict'

require('dotenv').config()

const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      // routes = require('./routes/index'),
      acquisitions = require('./routes/acquisitions/routes'),
      owners = require('./routes/owners/routes'),
      parishes = require('./routes/parishes/routes'),
      properties = require('./routes/properties/routes'),
      receipts = require('./routes/receipts/routes'),

      srcDir = __dirname + "/src/"

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(bodyParser.urlencoded({
    extended: true
}))
// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(express.static(srcDir));

// app.use('/', routes);
app.use('/api', acquisitions)
app.use('/api', owners)
app.use('/api', parishes)
app.use('/api', properties)
app.use('/api', receipts)

module.exports = app;
