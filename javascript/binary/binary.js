var Binary = function(str) {
  this.str = str;
};

Binary.prototype.toDecimal = function() {
  if (/[^01]+/.test(this.str)) {
    return 0;
  }

  const bits = this.str.split('').reverse();
  return bits.reduce((total, value, index) => {
    return total + value * Math.pow(2, index); }, 0);
};

module.exports = Binary;
