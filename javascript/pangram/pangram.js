var Pangram = function(input) {
  this.input = input.toLowerCase();
};

Pangram.prototype.isPangram = function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < alphabet.length; i += 1) {
    if (this.input.indexOf(alphabet.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
