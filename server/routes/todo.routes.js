const router = require('express').Router();
const { Todo } = require('../models');

//api/todo route
router
	.route('/')
	.get((req, res) => {
		Todo.find({})
			.then(data => {
				console.log('get / route', data);
				res.json({ success: true, data });
			})
			.catch(e => {
				console.error(e);
				res.json({ success: false });
			});
	})
	.post((req, res) => {
		console.log(`post api/todo: ${req.body}`);
		//create a new document in db
		Todo.create({
			text: req.body.text
		})
			.then(data => {
				console.log('post / route', data);
				res.json({ success: true, data });
			})
			.catch(e => {
				console.error(e);
				res.json({ sucess: false });
			});
	});

router.route('/:id').delete((req, res) => {
	console.log(req.params);

	Todo.findByIdAndDelete(req.params.id)
		.then(data => {
			res.json({ success: true });
		})
		.catch(err => {
			res.json({ success: false });
		});
});

module.exports = router;
