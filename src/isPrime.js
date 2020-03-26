function isPrime(n) {
if ( n === 1) {
  return false;
}
if ( n === 2) {
  return true;
}
else
  {
    for (let x = 2; x< n; x++) {
      if (n % x === 0) {
      return false;
      }
    }
    return true;
  }
}

if (require.main === module) {
  console.log(isPrime(17) === true);
  console.log(isPrime(31) === true);
}

module.exports = isPrime;
