
const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/local', function(req, res) {
	res.send('<strong>' + "Gallo de oro" + '</strong>')
})

app.get('/visitor', function(req, res) {
	res.send('<strong>' + "Gallo Cenizo" + '</strong>')
})

app.get('/apuesta', function(req, res) {
	res.send('<strong>' + "Valor Apuesta: $1.000.000" + '</strong>')
})

app.listen(3000, function() {
	console.log('Server listening on port 3000');
})
