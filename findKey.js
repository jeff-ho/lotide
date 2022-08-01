
const findKey = function (object, callback) {
  for (let value in object) {
    if (callback(object[value])) {
      return value;
    }
  }
};

module.exports = findKey;

// let result = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); 






