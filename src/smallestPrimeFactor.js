/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 *(2); // => 2
 *(4); // => 2
 *(21); // => 3
 *(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function isPrime(num){
  console.log('The number input is: ' + num)
  let counter = 0;
  if(num === 1){
   return false;
  }
  else{
    for(i=1; i < num; i++){
      if(num%i === 0){
      counter++;
    }
  }
  console.log('num is ' + num)
 }

if(counter < 2){
  return true;
  }
else{
  return false;
  }
}


function findPrimeFactors(num) {
  console.log('num is ' + num)
  let primeFactors = []
  let currentNumber = num
  console.log('We have left the isPrime function and are now entering the findPrimeFactors funciton')
  console.log('The current value of isPrime is: ' + currentNumber)
  if (currentNumber === true){
    return ('Congrats!' + num + ' is a prime number and is its own smallest prime factor.')
  }
  else if (currentNumber === 1){
    return ('The number 1 is not a prime number.')
  }
  else if (currentNumber === false){
    for (let i = 2; i <= num/2; i++){
      while (currentNumber % i === 0){
        primeFactors.push(i);
        currentNumber /= i;
      }
    }
  return primeFactors
  }
  let smallestsoFar = primeFactors[0]

  for (let element of primeFactors){
    if (element < smallestsoFar){
      smallestsoFar = element
    }
  }
  return smallestsoFar
}


/* function(array){
  let smallestsoFar = primeFactors[0]

  for (let element of primeFactors){
    if (element < smallestsoFar){
      smallestsoFar = element
    }
  }
  return smallestsoFar
} */
if (require.main === module) {
  console.log('Running sanity checks for findPrimeFactors function:');
  console.log(findPrimeFactors(isPrime((3))));
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((2))));
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((1))))
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((6))));
  /* console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((20))));
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((1000))));
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((987))));
  console.log('------------------------------------------')
  console.log(findPrimeFactors(isPrime((97)))); */

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = findPrimeFactors;
