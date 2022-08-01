const assert = require('chai').assert;
const tail = require('../tail');


describe ('#tail', () => {
  it ('Should return everything past the 0 index element', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
   assert.deepEqual(result, ["Lighthouse", "Labs"] )
  });

  it ('Should return empty array for an array of 1 element', () => {
    const result = tail(["Hello"]);
   assert.deepEqual(result, [])
  });

  it ('Should return empty array for an empty array', () => {
    const result = tail([]);
   assert.deepEqual(result, [])
  });
})






