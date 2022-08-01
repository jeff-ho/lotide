const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let arr1Length = Object.keys(object1).length;
  let arr1Keys = Object.keys(object1);
  let arr2Length = Object.keys(object2).length;
  let status;

  if (arr1Length !== arr2Length) {
    return false;
  }

  for (let key of arr1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) === true) {
      status = eqArrays(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      status = true;
    } else if (object1[key] !== object2[key]) {
      status = false;
      break;
    }
  }
  return status;
};

module.exports = { eqObjects };
