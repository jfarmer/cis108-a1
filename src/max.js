/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let maxSoFar = array[0]

  for (let element of array) {
    if (element > maxSoFar) {
      maxSoFar = element;
    }
  }

  return maxSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');

  console.log(max([1, 2, 3]) === 3);
  console.log(max([0, -100, 50, -200]) === 50);
  console.log(max([-200, -400, -100, -300]) === -100);
  console.log(max([0]) === 0);
  console.log(max([1]) === 1);
  console.log(max([-1]) === -1);
  console.log(max([11, 11, 11]) === 11);
  console.log(max([-22, -11, -22]) === -11);
}

module.exports = max;
