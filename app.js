var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// controllers
todoController(app);

app.get(['/', '/home'], function(req, res){
	res.send('welcome home');
});

app.listen(3000, function(){
	console.log('server on 3000 port');
});