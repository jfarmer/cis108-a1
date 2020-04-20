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
  let obj = {};
  for (i=0;i<array.length;i++) {
    if(obj.hasOwnProperty(array[i])) {
      obj[array[i]] += 1;
    }
    else {
      obj[array[i]] = 1;
    }
  }


/*
  for (i=0;i<array.length;i++) {
    let count = 0;
    for (j=0;j<array.length;j++) {
       if(array[i] === array[j]) {
         count++;
         obj[array[i]] = count;
        }
    }
  }
*/
  return obj;
}

if (require.main === module) {
  console.log(countItems(["apple","bacon","cow","apple"]) === { apple: 2, bacon: 1, cow: 1 });
  console.log(countItems(["apple","bacon","bacon","cow"]) === { 'apple': 1, 'bacon': 2, 'cow': 1 });
  console.log(countItems(["apple","bacon","cow","cow","cow"]) === { apple: 1, bacon: 1, cow: 3 });
  console.log(countItems(["apple","apple","apple","apple"]) === { apple: 4 });
  console.log(countItems(["apple","bacon","cow","apple"]));
  console.log(countItems(["apple","bacon","bacon","cow"]));
  console.log(countItems(["apple","bacon","cow","cow","cow"]));
  console.log(countItems(["apple","apple","apple","apple"]));
}


module.exports = countItems;
