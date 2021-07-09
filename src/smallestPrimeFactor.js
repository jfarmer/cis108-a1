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
let arr = [];

for ( var i = 2; i < num; i++) {
let isPrime;

if (num % i === 0) {
  isPrime = true;
}
for (var j = 2; j <= i; j++) {
    if ( i % j === 0) {
  isPrime == false;
  }
}
if (isPrime == true)
{ arr.push(i)}
}
let smallest= Math.min(...arr);
return smallest;
}
if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactor(32));
  console.log(smallestPrimeFactor(35));
  console.log(smallestPrimeFactor(91));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactor;
