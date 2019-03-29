var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(3, 5));
console.log(stuff.adder_v2(3, 5));
console.log('With pi: ' + stuff.adder(stuff.pi, 5));