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

 let a = 22
let b = 44
let c = 13
let d = 3

function maxKey(array) {

  //   let keyValues = {
// "a": "22",
// "b": "44",
// "c": "13",
// "d": "3"
// }
 let maxKeySoFar = array[0];
 for (let element of array) {
   if (element > maxKeySoFar) {
   maxKeySoFar = element;
 }
}
return maxKeySoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
console.log('-------');
console.log(maxKey([a,b,c,d]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
