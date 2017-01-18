//var dblink = require('../db/dbconfig');
var todomodel = require('../models/todo_model');
var express = require('express');
var router = express.Router();



/* get location from db */
router.get('/', function(req, res) {
    /*var db = req.db;
	var TodoSchema = new db.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});

	var todo = db.model('todos', TodoSchema);*/
	todomodel.Todo.find(function (err, result) {
	  if (err) {
	  	return console.error(err);
	  }
	  else{
		  console.log(result);
		  console.log('Successful retrieved '+ result.length + " records");
		  res.send('Successful retrieved '+ result.length + " records");
	  }
	});

});

/* add location to db */
router.post('/', function(req, res) {
    /*var db = req.db;
	var TodoSchema = new db.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});

	// Create a todo in memory
	var Todo = db.model('todos', TodoSchema);*/
	//console.log(req.body);
	//var todo = new todomodel.Todo({name: 'Master NodeJS1', completed: false, note: 'Getting there...'});
	var todo = new todomodel.Todo(req.body);
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
