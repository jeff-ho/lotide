//Assert Arrays Function
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

// eqArrays Function
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


// Actual function

// input an array of numbers
//return array of middle numbers
// If array contains only 1 or 2 numbers return empty array
// If array has odd number return single middle number
// If array has even number return both middle numbers 


const middle = function(array) {
  let result = [];
  let midIndex = Math.floor(array.length / 2)
  let arrLen = array.length;
  if (arrLen === 1 || arrLen === 2) {
    return result;
  }
  if (arrLen % 2 !== 0) {
    result.push(array[midIndex]);
  } else {
    result.push(array[midIndex - 1], array[midIndex])
  }
  return result;
}

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]))



