/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  // This is your job. :)
  // Don't use the built-in Math.max
  let initial = array[0];
  for (let element of array) {
    if (initial < element) {
      initial = element
    }
  }
  return initial;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log('The max value of the array is:', max([0, 1, 2, 3, 4, 5, 6]));
  console.log('The max value of the array is:', max([-10, -20, -30, -30]));
  console.log('The max value of the array is:', max([6, 1, 2, 3, 4]));
}

module.exports = max;
