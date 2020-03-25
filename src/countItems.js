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
  let finalDict = {};
  for (element of array) {
    if (element in finalDict) {
      finalDict[element] += 1
    }
    else {
      finalDict[element] = 1
    }
  }
  return finalDict
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log(countItems(['apple', 'goat', 'apple', 'potato']));
  console.log(countItems(['a','a','b','c','b','a','a']));
  console.log(countItems(['1', '100', '1', '2']));
  }

module.exports = countItems;
