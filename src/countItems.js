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
    let itemCount = 0;
    for (let element of array){
      if (element === value){
        itemCount ++;
      }
    }
    return itemCount;
  }


if (require.main === module) {
  console.log('Running sanity checks for countItems:');

  console.log(countItems([1,3,3,4,5], 3)===2);
  console.log(countItems(['apple', 'apple', 'orange'], 'orange')===1);
  console.log(countItems(['corn', 'beans', 'beans', 'potato'], 'beans'));
}

module.exports = countItems;
