let sum = require('./sum');


function avg(array) {
  let sum = 0;
  for(i = 0; i< array.length; i++){
    sum = sum + array[i];
  }
  return sum/array.length;
}


if (require.main === module) {
  console.log('Running sanity checks for avg:');
  console.log(avg([0, 10, 20]) === 30);
  console.log(avg([6, 10]) === 8);

}

module.exports = avg;
