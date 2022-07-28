const assertEqual = function (actual, expected) {
  const flame = String.fromCodePoint(0x1f525);
  const scream = String.fromCodePoint(0x1f631);
  if (actual === expected) {
    console.log(
      flame + flame + flame + `Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      scream + scream + scream + `Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

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




// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false