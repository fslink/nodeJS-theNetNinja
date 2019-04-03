var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Welcome home!');
});

app.get('/contact', function(req, res){
	res.send('Contact us');
});

app.listen(3000);