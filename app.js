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
      routes = require('./routes/index'),
      acquisitions = require('./routes/acquisitions/routes'),
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

app.use('/', routes);
app.use('/api', acquisitions)

// app.set('port', process.env.PORT || 8080);

// var server = app.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + server.address().port);
// });

module.exports = app;
