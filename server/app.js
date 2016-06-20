var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var authentication = require('./modules/authentication');
var encryption = require('./modules/encryption');
var connection = require('./modules/connection');
var clientErrorHandler = require('./modules/clientErrorHandler');
var passport = require('./strategies/user_local.js');

var logout = require('./routes/logout');
var user = require('./routes/user');
var index = require('./routes/index');
var services = require('./routes/services');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {maxage: 360000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/services', services);
app.use('/user', user);
app.use('/logout', logout);
app.use('/', index);

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/templates'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});