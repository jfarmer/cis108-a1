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
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let largestValue = values[0]
  let largestValueKey = keys[0]

  for (let key of keys){
    if (obj[key] > largestValue) {
      console.log('the value:', obj[key])
      largestValue = obj[key]
      largestValueKey = key
    }
  }
  return largestValueKey
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 10, b: -4, c: 20}) === 'c');
  console.log(maxKey({hello: 10, hi: 20, hey: -4}) === 'hi');
  console.log(maxKey({a: 0, b: 2, c: 1}) === 'b');
  }

module.exports = maxKey;
