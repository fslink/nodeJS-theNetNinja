var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var Obj = {
	name: 'fuckers',
	job: 'enculeur de mamans',
	age: '40',
	caracter: 'crevard'
};

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get(['/', '/home'], function(req, res){
	res.render('index');
});

app.get('/contact', function(req, res){
	console.log(req.query);
	res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-sucess', {data: req.body});
});

app.get('/lorem', function(req, res){
	var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
	myReadStream.pipe(res);
});

app.get('/crevard', function(req, res){
	console.log('the request url is: ' + req.url);
	res.json(Obj);
});

app.get(['/profile/:name', '/profile'], function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eating', 'swimming', 'fighting']}
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000, function(){
	console.log('server on 3000 port');
});