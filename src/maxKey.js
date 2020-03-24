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
  // This is your job. :)
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let initial = values[0];
  let max = 0;;
  for (let i = 1; i < values.length; i++) {
    if (initial < values[i]) {
      initial = values[i]
      max = i;
    }
  }
  return keys[max];
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log('The max key of the object is:', maxKey({a:1, b:2, c:3}));
  console.log('The max key of the object is:', maxKey({a:100, b:-4, c:0, d:40}));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
