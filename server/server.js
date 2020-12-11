const express = require('express');
const app = express();
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}. http://localhost:${PORT}`);
});
