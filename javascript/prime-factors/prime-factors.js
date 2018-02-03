var PrimeFactors = function() {};

PrimeFactors.for = function(n) {
  if (!n || n < 2) {
    return [];
  }

  var factors = [];
  for (var i = 2; i <= n; i += 1) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  return factors;
};

module.exports = PrimeFactors;
