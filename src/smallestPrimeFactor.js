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
  let prime = [];
  let primeFactor = [];

  for (let i =2;i<=num;i++) {
    if (isPrime(i) === true) {
      prime.push(i);
    }
  }
  console.log(prime);
  let primeItself = false;
  for (let p = 0;p<prime.length;p++) {
    if (num === prime[p]) {
      primeItself = true;
      return num;
    }
  }
  if (primeItself === false) {
    for (let j=0;j<=prime.length-1;j++) {
      let test = num/prime[j];
        if (Number.isInteger(test)) {
        primeFactor.push(prime[j]);
      }
    }
    console.log(primeFactor);

    smallest = primeFactor[0];

    for (let k=0;k<primeFactor.length;k++) {
      if (primeFactor[k] < smallest) {
      smallest = primeFactor[k];
      }
      if (smallest === undefined) {
      smallest = 1;
      }
      }
    //console.log(smallest);
    return smallest;
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
