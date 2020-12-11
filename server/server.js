const express = require('express');
const routes = require('../routes');

const app = express();
const PORT = process.env.PORT || 5005;

//use express middlewaree
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}. http://localhost:${PORT}`);
});
