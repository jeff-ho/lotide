const takeUntil = function (array, callback) {
  let result = [];
  for (let data of array) {
    if (!callback(data)) {
      result.push(data);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;
