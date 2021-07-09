/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let maxNumber = 0;
  for (let number of array) {
    if (number > maxNumber) {
      maxNumber = number
    }
  }
  return maxNumber
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
  console.log(max([1,2,3]) === 3);
  console.log(max([5,2,3,9]) === 9);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
