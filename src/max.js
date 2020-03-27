/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
let maxSoFar = array[0];

for (let element of array) {
if (element > maxSoFar) {
maxSoFar = element;
}
}
return maxSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
console.log('----------');
console.log(max([2,4,8,7,5,22,87,11,44,12]));
console.log(`Let's make sure that wasn't a fluke`);
console.log('----------');
console.log(max([34,21,48,17,18,25,8]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
