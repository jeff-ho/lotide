const findKeyByValue = function (object, value) {
  for (let tv in object) {
    if (object[tv] === value) {
      return tv;
    }
  }
};

module.exports = findKeyByValue;
