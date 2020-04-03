/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let count = 0;

  for(i = 0; i < array.length; i++){
    count = count + array[i];
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([1, 2, 3])=== 6);
  console.log(sum([-10, 10, 0])=== 0);
  console.log(sum([100, 200, 15000])=== 15300);
  console.log(sum([1234, 3541, -5161324, 56613324]));
}

module.exports = sum;
