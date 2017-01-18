//db connect
var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');
var mongoose = require('mongoose');
var db = mongoose;
db.connect('mongodb://localhost:27017/nodetest1');


module.exports.db = db;