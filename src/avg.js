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
  let count=0;
  for (let i in array) {

    count+=array[i] }

    return count/array.length
  }
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.


if (require.main === module) {
  console.log('Running sanity checks for avg:');
console.log(avg([1,2,3,4,5]));
console.log(avg([5,5,5,5,5]));
console.log(avg([5,10,15,20,25]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
