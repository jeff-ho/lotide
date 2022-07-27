const assertEqual = function (actual, expected) {
  const flame = String.fromCodePoint(0x1f525);
  const scream = String.fromCodePoint(0x1f631);
  if (actual === expected) {
    console.log(
      flame + flame + flame + `Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      scream + scream + scream + `Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

// input as string 
//return the count of each letter within that string without spaces
//output should be an object

//loop through the string 
//push the letters into an object as keys
//if the key alread exists then add 1 to it's value

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

console.log(countLetters("lighthouse in the house"))