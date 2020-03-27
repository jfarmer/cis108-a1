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
  let count = 0
  for (let element in array) {
count+=array[element];
  }
 //readfileSync('./sum');
  // This is your job. :)
  // Use the sum function you wrote rather than re-implementing
  // it in this file. We required it above.
  return (count/array.length);
}


if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([2,3,4,5]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
