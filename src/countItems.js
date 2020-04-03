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
  let dictionary = {};

  for (let element of array){
    if (element in dictionary){
      dictionary[element] = dictionary[element] + 1
    }
    else{
      dictionary[element] = 1
    }
  }
return dictionary
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');

  console.log(countItems(['a','b','a','a','b']) === '{ a: 3, b: 2 }');
  console.log(countItems(['apple', 'goat', 'apple', 'potato']) === { 'apple': 2, 'goat': 1, 'potato': 1 })
  console.log(countItems(['tired', 'tired', 'tired', 'hungry', 'happy', 'happy', 'tired']))
}
module.exports = countItems;
