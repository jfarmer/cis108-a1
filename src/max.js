
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
  console.log(max([1, 2, 3]) === 3);
  console.log(max([0, -100, 50, -200]) === 50);
}

module.exports = max;
