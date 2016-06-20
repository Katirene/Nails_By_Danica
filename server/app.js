var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var services = require('./routes/services');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('services', services);


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