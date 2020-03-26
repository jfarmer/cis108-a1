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
  var dict = {};
var arr = [];
for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
        arr.push( [ key, dict[key] ] );
    }
}
  return Math.max.apply(null,Object.keys(obj));
}
// haven't quite figured this one out, tried internet resources.
  // This is your job. :)


if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
console.log(maxKey({a: 10, b: -4, c: 20}));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
