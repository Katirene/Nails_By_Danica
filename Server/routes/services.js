var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/danica');
mongoose.model(
    'Service',
    new Schema({
            "name": String
        },
        {
            collection: 'services'
        }
    ));

var Service = mongoose.model('Service');


router.get('/', function(req, res) {
    console.log("inside services.js");
    Service.find({}, function(err, data) {
        if(err) {
            console.log('ERR ', err);
        }
        console.log(data);
        res.send(data);
    })

});

router.post('/', function(req, res) {
    console.log("I am posting services", req.body);
    //Service.find({}, function(err, data) {
    //    if(err) {
    //        console.log('ERR ', err);
    //    }
    //    console.log(data);
    //    res.send(data);
    //});

});

module.exports = router;