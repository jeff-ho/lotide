const countLetters = function(str) {
  let result = {};
  let newStr = str.split(' ').join('')
  for (let letter of newStr) {
    if (result[letter]) {
      result[letter] ++
    } else {
      result[letter] = 1
    }
  }
  return result;
}

module.exports = countLetters;




