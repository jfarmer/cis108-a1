/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let total = 0;
  for(element of array) {
    total = total + element;
  }
  return total;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([2,2,2]) === 6);
  console.log(sum([4,4,4]) === 12);
  console.log(sum([1,2,3]) === 6);
  console.log(sum([12,12,12]) === 36);
  console.log(sum([-2,2,-4]) === -4);
  console.log(sum([2]) === 2);
  console.log(sum([-333]) === -333);
}

module.exports = sum;
