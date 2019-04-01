var event = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, event.EventEmitter);

var james = new Person('james');
var patrick = new Person('patrick');
var youssef = new Person('youssef');
var people = [james, patrick, youssef];

people.forEach(function(element, index) {
	element.on('speak', function(msg){
		console.log(element.name + ' said: ' + msg);
	})
});

james.emit('speak', 'hey dudes');
youssef.emit('speak', 'bsartek mon frere');