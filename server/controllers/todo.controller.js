//import todo model
const { Todo } = require('../models');

//exports methods
module.exports = {
	//create a new todo in db
	create: function(req, res) {
		Todo.create({ body: req.body })
			.then(data => {
				res.json({ success: true, data });
			})
			.catch(err => {
				re.status(500).json({ success: false, error: 'Could not save todo' });
			});
	},

	//get all todos
	findAll: function(req, res) {
		Todo.find({})
			.then(data => {
				res.json({ success: true, data });
			})
			.catch(err => {
				res.status(500).json({ success: false, error: 'Could not fetch todos' });
			});
	},

	//update todos
	update: function(req, res) {
		Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.then(data => {
				res.json({ success: true, data });
			})
			.catch(err => {
				res.status(500).json({ success: false, error: 'Could not update todo' });
			});
	},

	//delete todo
	delete: function(req, res) {
		Todo.findByIdAndDelete(req.params.id)
			.then(data => {
				res.json({ sucess: true, data });
			})
			.catch(err => {
				res.status(500).json({ success: false, error: 'Could not delete todo' });
			});
	}
};
