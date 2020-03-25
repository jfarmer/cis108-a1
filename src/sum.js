/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let acc = 0;
  for (let number of array) {
    acc = acc + number
  }
  return acc
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([1,2,4]) === 7);
  console.log(sum([3,3,3,3,2]) === 14);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
