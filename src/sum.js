/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let arraySum = 0;
  for (number of array) {
    arraySum += number
  }
  return arraySum
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([1, 1, 1]) === 3)
  console.log(sum([1, 10, 9]) === 20)
  console.log(sum([]) === 0)
}

module.exports = sum;
