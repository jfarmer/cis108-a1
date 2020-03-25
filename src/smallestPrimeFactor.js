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
  primeFactors = [3, 5, 7, 11, 13]
  let smallestPrimeFactorTwo = 2

  if (num % 2 === 0) {
    return smallestPrimeFactorTwo
  }
  else {
    for (element of primeFactors) {
      if (num % element === 0) {
        return element
      }
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactor(2) === 2);
  console.log(smallestPrimeFactor(4) === 2);
  console.log(smallestPrimeFactor(21) === 3);
  console.log(smallestPrimeFactor(91) === 7);
}

module.exports = smallestPrimeFactor;
