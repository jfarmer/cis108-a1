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
  let amountInArray = 0;
  for (number of array) {
    amountInArray += 1
  }
  return sum(array) / amountInArray
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([1, 1, 1]) === 1)
  console.log(avg([1, 10, 9, 4]) === 6)
  console.log(avg([5, 5, 5]) === 5)
  }

module.exports = avg;
