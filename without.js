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

// given two arrays as parameters
//I want to remove contents of array 2 from array 1
// output should be an array without the unwanted elements
//do not mutate the original strings. So no split, join, slice, splice

//loop through each value of arr1 and see if it is included within arr2.
//if the value of arr1 is not included within arr2, add it to an empty array
// output would return the resulting array

const without = function (arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === false) {
      array.push(arr1[i]);
    }
  }
  return array;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
