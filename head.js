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

const head = function (array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
