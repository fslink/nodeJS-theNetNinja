var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
	return `the sum of the 2 numbers is ${a+b}`;
}

var adder_v2 = function(a, b){
	return "the sum of the 2 numbers is ${a+b}";
}

var pi = 3.142;

module.exports = {
	counter: counter,
	adder: adder,
	adder_v2: adder_v2,
	pi: pi
};
