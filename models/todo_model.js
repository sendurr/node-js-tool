var db = require('mongoose');

var TodoSchema = new db.Schema({
	name: String,
	completed: Boolean,
	note: String,
	updated_at: { type: Date, default: Date.now },
});

// Create a todo in memory
var Todo = db.model('todos', TodoSchema);


module.exports.Todo = Todo;
