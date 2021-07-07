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
  return (sum(array)/array.length);
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([4,4,4,4]) === 4);
  console.log(avg([4,2,8,8]) === 5.5);
  console.log(avg([3,5,5,7]) === 5);
  console.log(avg([-3,-5,-5,-7]) === -5);
}

module.exports = avg;
