/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  // This is your job. :)
  if (array.length === 0) {
    return 0;
  }
  let count = 0;
  for (let element of array) {
    count += element;
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log('The sum of the array is:', sum([]));
  console.log('The sum of the array is:', sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log('The sum of the array is:', sum([-10, 0, -20]));
}

module.exports = sum;
