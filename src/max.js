/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let maxNumber = array[0];
  for (number of array) {
    if (number > maxNumber) {
      maxNumber = number
    }
  }
  return maxNumber
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
  console.log(max([1, 2, 3, 4]) === 4);
  console.log(max([1, 1, 1, 1]) === 1);
  console.log(max([100, 98, 100, 101]) === 101);
  console.log(max([-2, -1, -5, -7]) === -1)
}

module.exports = max;
