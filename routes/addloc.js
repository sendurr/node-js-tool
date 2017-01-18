//var dblink = require('../db/dbconfig');
var express = require('express');
var router = express.Router();


/* add location to db */
router.get('/', function(req, res) {
    var db = req.db;
	var TodoSchema = new db.Schema({
	  name: String,
	  completed: Boolean,
	  note: String,
	  updated_at: { type: Date, default: Date.now },
	});

	// Create a todo in memory
	var Todo = db.model('todos', TodoSchema);
	var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
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
