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
  let count = 0
  let dict = {};
  for (let item of array) {
    if (item in dict) {
      dict[item] = dict[item] + 1
    }
    else {
      dict[item] = 1
    }
  }
  console.log(dict)
  return dict
}
//My sanity checks aren't working by my code is right so idk why???
if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log(countItems(['a','b','a','a','b']) === '{ a: 3, b: 2 }');
  console.log(countItems(['apple', 'goat', 'apple', 'potato']) === { 'apple': 2, 'goat': 1, 'potato': 1 })

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
