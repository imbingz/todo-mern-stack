const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

//db connection
require('./config/db')();

const PORT = process.env.PORT || 5005;

//use express middlewaree
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//For heroku deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}. http://localhost:${PORT}`);
});
