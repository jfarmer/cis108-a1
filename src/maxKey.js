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
  let maxVal = 0;
  let maxKey = 0;
  for (let key of Object.keys(obj)) {
    if (obj[key] > maxVal) {
      maxVal = obj[key]
      maxKey = key
    }
  }
  return maxKey
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 10, b: -4, c: 20}) === 'c')
  console.log(maxKey({a: 10, j: -40, c: 0, z:100}) === 'z')

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
