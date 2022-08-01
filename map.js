const assertArraysEqual = function (actual, expected) {
  const flame = String.fromCodePoint(0x1f525);
  const scream = String.fromCodePoint(0x1f631);
  let value;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      value = false;
    } else {
      value = true;
    }
  }
  if (value === true) {
    console.log( 
      flame + flame + flame + `Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      scream + scream + scream + `Assertion Failed: ${actual} !== ${expected}`
    );
  }
}

const eqArrays = function(arr1, arr2) {
  let status;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      status = false;
    } else {
      status = true;
    }
  }
  return status;
};



// Start of our own map function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
}
module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]))

