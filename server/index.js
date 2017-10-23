
const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/local', function(req, res) {
	res.send('<strong>' + 15.6 + '</strong>')
})

app.get('/visitor', function(req, res) {
	res.send('<strong>' + 66.6 + '</strong>')
})

app.listen(3000, function() {
	console.log('Server listening on port 3000');
})
