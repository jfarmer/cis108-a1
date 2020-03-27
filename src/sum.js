/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let count = 0

  for(let element in array) {
count+=array[element];
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
console.log('-------');
let array = [4,5,6,2,4,6,7];
console.log(sum(array));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
