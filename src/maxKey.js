/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let keys= Object.keys(obj);
  let values = Object.values(obj);
  let maxValue = values[0];
  let maxKey = keys[0]

  console.log('Here are all the keys:' + keys)
  console.log('Here are all the values:' + values)
  console.log('This is maxValue before entering the loop: ' + maxValue)
  console.log('This is maxKey before entering the loop: ' + maxKey)


  for (let i = 1; i < values.length; i++){
    if (maxValue < values[i]){
      maxValue = values[i]
      maxKey = keys[i]
    }
  }
  return maxKey
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');

  console.log('The max key of the object is:', maxKey({a:1, b:2, c:3}));
  console.log('------------------------------------')
  console.log('The max key of the object is:', maxKey({a:100, b:-4, c:0, d:40}));
  console.log('------------------------------------')
  console.log('The max key of the object is:', maxKey({a:10, b:0, c:-55, d:400}));
  console.log('------------------------------------')
  console.log('The max key of the object is:', maxKey({a:-30, b:-4, c:-79, d:-69}));
  console.log('------------------------------------')
  console.log('The max key of the object is:', maxKey({a:100, b:100, c:100, d:100}));
  console.log('------------------------------------')
}

module.exports = maxKey;
