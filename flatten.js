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

module.exports = flatten;

