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
  let average = sum(array)/array.length

  return average;
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');

  console.log(avg([1, 2, 3])=== 2);
  console.log(avg([10, 20, 30])=== 20);
  console.log(avg([-10, 10, 55, 11]));
}

module.exports = avg;
