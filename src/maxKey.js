let max = require('./max');
/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let valueArray = Object.values(obj);
  let maxValue = max(valueArray);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        if (obj[key] === maxValue)
        return key;
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 10, b: -4, c: 20}) === 'c');
  console.log(maxKey({a: 122, b: 45, c: 20}) === 'a');
  console.log(maxKey({a: 3, b: 5, c: 1}) === 'b');
  console.log(maxKey({a: -2, b: -4, c: -5}) === 'a');
}

module.exports = maxKey;
