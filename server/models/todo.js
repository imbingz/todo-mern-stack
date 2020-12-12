const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
