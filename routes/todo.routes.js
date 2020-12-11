const router = require('express').Router();

//api/todo route
router
	.route('/')
	.get((req, res) => {
		res.json({ success: true });
	})
	.post((req, res) => {
		res.json({ sucess: true });
	});

module.exports = router;
