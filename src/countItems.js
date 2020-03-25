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
function countItems(array) {
  // This is your job. :)
  let counter = {};
  for (let item of array) {
    let modified = item.toLowerCase()
    if (counter.hasOwnProperty(modified)) {
      counter[modified] += 1;
    } else {
      counter[modified] = 1;
    }
  }
  return counter;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log('The count of elements in the array:', countItems(['apple', 'goat', 'apple', 'potato']));
  console.log('The count of elements in the array:', countItems([]));
  console.log('The count of elements in the array:', countItems(['apple', 'APPLE', 'apple', 'APplE']));
  console.log('The count of elements in the array:', countItems(['apple', 'goat', 'POTATO', 'potato', 'gOAt', 'APpLe']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
