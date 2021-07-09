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
  let dict = {}

  for (let i = 0; i < array.length; i++) {
    dict[array[i]]=null;
}
for (let i = 0; i < array.length; i++) {
  dict[array[i]]+=1;
}
return dict;
}
if (require.main === module) {
  console.log('Running sanity checks for countItems:');
console.log(countItems(['apple', 'goat', 'apple', 'potato']));
console.log(countItems(['Jalen', 'goat', 'mom', 'mom', 'Jalen']));
console.log(countItems(['apple', 'dog', 'dog', 'potato', 'cat',]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
