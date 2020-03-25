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
 let sumArray = sum(array)
 average = sumArray/array.length
 return average
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([2,2,4,4]) === 3);
  console.log(avg([2,2,5,4,7,8,8,12]) === 6);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
