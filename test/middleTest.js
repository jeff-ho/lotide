const assert = require('chai').assert;
const middle = require('../middle');

describe ('#middle', () => {
  it('Should return the middle two numbers for an even numbered array' , () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  it('Should return the middle number for an odd numbered array' , () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
});

