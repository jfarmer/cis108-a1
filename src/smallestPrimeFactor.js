let isPrime = require('./isPrime')
/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function smallestPrimeFactor(num) {
  if(num % 2 === 0) {
    return 2;
  }
  else {
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i == 0)
        return i;
    }
  }
}



if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactor(15) === 3);
  console.log("*");
  console.log(smallestPrimeFactor(339) === 3);
  console.log("*");
  console.log(smallestPrimeFactor(113) === 113);
  console.log("*");
  console.log(smallestPrimeFactor(367) === 2);
  // not working
  console.log("*");
  console.log(smallestPrimeFactor(55) === 5);
  console.log("*");
  console.log(smallestPrimeFactor(35) === 5);
  console.log("*");

}

module.exports = smallestPrimeFactor;
