
// assertArraysEqual function for comparing arrays and give assertion
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
};

// compares two arrays to see if they are the same
const eqArrays = function(arr1, arr2) {
  let status;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      status = false;
    } else {
      status = true;
    }
  }
  return status;
};


// take an array containing elements or arrays
//flatten out the array by getting ride of nested arrays
// output an array containing all the values

//loop through each value of the original array.
// if statement using Array.isArray() to see if the value is an array
// if not then push value into an empty array
// if so then loop through that array and push the values into the empty array
// return the finished array

const flatten = function(array) {
  let localArray = [];
  for (let i = 0 ; i < array.length ; i++) {
    if (Array.isArray(array[i]) === false) {
      localArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (let j = 0 ; j < array[i].length ; j++) {
        localArray.push(array[i][j]);
      }
    }
  }
  return localArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))
console.log(flatten([[1,2,3], [4,5,6], [7,8,9]]))
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]))
console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]))