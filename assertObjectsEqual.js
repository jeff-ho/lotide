//our eqArrays function
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

//our eqObjects function
const eqObjects = function(object1, object2) {
  let arr1Length = Object.keys(object1).length
  let arr1Keys = Object.keys(object1)
  let arr2Length = Object.keys(object2).length
  let status;
  if (arr1Length !== arr2Length) {
    return false;
  }
  for (let key of arr1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) === true) {
      status = eqArrays(object1[key],object2[key])
    } else if (object1[key] === object2[key]) {
      status = true;
    }else if (object1[key] !== object2[key]) {
      status = false;
      break;
    }
  }
  return status;
};


//our actual assetObjectsEqual function
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




