
const express = require('express');
const app = express();

app.get('/test', function(req, res) {
	res.send('testing node js server...');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
