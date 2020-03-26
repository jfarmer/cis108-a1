/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let largestSoFar = array[0];

  for (let element of array) {
    if (element > largestSoFar) {
      largestSoFar = element;
    }
  }

  return largestSoFar;
  // This is your job. :)
  // Don't use the built-in Math.max
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
console.log(max([2,7,1,5,6,8,4]));
console.log(max([6,9,1,5,6,18,4]));
console.log(max([12,70,1,5,6,8,4]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
