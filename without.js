const assertArraysEqual = require("./assertArraysEqual");

const without = function (arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === false) {
      array.push(arr1[i]);
    }
  }
  return array;
};

module.exports = without;
