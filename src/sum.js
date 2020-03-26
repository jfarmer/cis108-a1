/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {

  let count=0;
 for (let i in array) {
  count+=array[i] }
  return count;
  // This is your job. :)
}

if (require.main === module) {
console.log('Running sanity checks for sum:');
console.log(sum([5,5,5,5,5]));
console.log(sum([8,6,7,4]));
console.log(sum([25,25,25,25,25]));
// Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
