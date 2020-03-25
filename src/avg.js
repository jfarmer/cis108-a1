let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.
  return sum(array) / array.length;
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log('The avg of the array is:', avg([0, -10, 10]));
  console.log('The avg of the array is:', avg([1, 2, 3, 4, 5, 6]));
}

module.exports = avg;
