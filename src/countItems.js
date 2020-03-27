/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array,value) {
  let count = 0;
  for (let element of array) {
    if (element === value) {
      count++;
    }
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log('-------');
  console.log(countItems(['apple','orange','orange','spiderman',], 'orange'==2))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
