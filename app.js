var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dblink = require('./db/dbconfig');
//var db_model = require('./model/todo_model');
/*//db connect
var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');
var mongoose = require('mongoose');
var db = mongoose;
db.connect('mongodb://localhost:27017/nodetest1');*/


var index = require('./routes/index');
var users = require('./routes/users');
var helloworld = require('./routes/helloworld');
var disploc = require('./routes/disploc');
var addloc = require('./routes/disploc');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = dblink.db;
    next();
});

app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //console.log(req.method);
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/helloworld', helloworld);
app.use('/addloc', addloc);
app.use('/disploc', disploc);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
