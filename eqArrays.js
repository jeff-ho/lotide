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

module.exports = eqArrays;

