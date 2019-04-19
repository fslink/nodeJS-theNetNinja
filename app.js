var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get(['/', '/home'], function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log('server on 3000 port');
});