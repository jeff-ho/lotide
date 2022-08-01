const eqObjects = require("./eqObjects")


const assertObjectsEqual = function(actual, expected) {
const inspect = require('util').inspect;
const flame = String.fromCodePoint(0x1f525);
const scream = String.fromCodePoint(0x1f631);
let status = eqObjects(actual, expected);

if (status === true) {
  console.log(flame + flame + flame + `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(scream + scream + scream + `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
} 
};

module.exports = assertObjectsEqual;




