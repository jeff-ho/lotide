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

module.exports = middle;







