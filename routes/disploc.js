var dblink = require('../db/dbconfig');
var express = require('express');
var router = express.Router();



/* get location from db */
router.get('/', function(req, res) {
    var db = dblink.db;
	var TodoSchema = new db.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});

	var todo = db.model('todos', TodoSchema);
	todo.find(function (err, result) {
	  if (err) return console.error(err);
	  console.log(result);
	  res.send('Successful retrieved '+ result.length + " records");
	});

});

/* add location to db */
router.post('/', function(req, res) {
    var db = dblink.db;
	var TodoSchema = new db.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});

	// Create a todo in memory
	var Todo = db.model('todos', TodoSchema);
	//console.log(req.body);
	//var todo = new Todo({name: 'Master NodeJS1', completed: false, note: 'Getting there...'});
	var todo = new Todo(req.body);
	// Save it to database
	todo.save(function(err){
	  if(err)
	    console.log(err);
	  else
	  	res.send("Successful Created 1 record");
	    console.log(todo);
	});

});

module.exports = router;
