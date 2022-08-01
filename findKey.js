const findKey = function (object, callback) {
  for (let value in object) {
    if (callback(object[value])) {
      return value;
    }
  }
};

module.exports = findKey;
