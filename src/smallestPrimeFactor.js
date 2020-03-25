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

function min(array) {
  // This is your job. :)
  // Don't use the built-in Math.max
  let initial = array[0];
  for (let element of array) {
    if (initial > element) {
      initial = element
    }
  }
  return initial;
}

function smallestPrimeFactor(num) {
  // This is your job. :)
  let factor = [];
  if(num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        factor.push(i);
      }
    }
    let minFactor = min(factor);
    return minFactor;
  } else {
    for (let i = -2; i > num; i--) {
      if (num % i === 0) {
        factor.push(i);
      }
    }
    let minFactor = min(factor);
    return minFactor;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log('The smallest prime factor is:', smallestPrimeFactor(90));
  console.log('The smallest prime factor is:', smallestPrimeFactor(-4));
  console.log('The smallest prime factor is:', smallestPrimeFactor(91));
  console.log('The smallest prime factor is:', smallestPrimeFactor(-91));
  console.log('The smallest prime factor is:', smallestPrimeFactor(21));
}

module.exports = smallestPrimeFactor;
