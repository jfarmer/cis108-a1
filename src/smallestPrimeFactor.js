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
  let changingNumber = Math.round(num / 2)
  let smallestPrime = 0
  while (changingNumber > 1) {
    if (num % changingNumber === 0) {
      smallestPrime = changingNumber
    }
    changingNumber = changingNumber - 1
  }
  if (smallestPrime === 0) {
    return num
  }
  else {
    return smallestPrime
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactor(91) === 7)
  console.log(smallestPrimeFactor(2) === 2)
  console.log(smallestPrimeFactor(21) === 3)

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactor;
