var Cipher = function(input) {
  if (input === undefined) {
    var newKey = '';
    for (var i = 0; i < 100; i += 1) {
      newKey += this.keyRange.charAt(Math.floor(Math.random() * this.keyRange.length));
    }
    this.key = newKey;
  } else if (!/^[a-z]+$/.test(input)) {
    throw Error('Bad key');
  } else {
    this.key = input;
  }
};

Cipher.prototype.keyRange = 'abcdefghijklmnopqrstuvwxyz';
Cipher.prototype.encode = function(plaintext) {
  var cyphertext = '';
  for (var i = 0; i < plaintext.length; i += 1) {
    const shift = this.key.charCodeAt(i % this.key.length) - 97;
    const code = plaintext.charCodeAt(i);

    cyphertext += String.fromCharCode((((code - 97 + shift) % 26)+26) % 26 + 97);
  }

  return cyphertext;
};

Cipher.prototype.decode = function(cyphertext) {
  var plaintext = '';
  for (var i = 0; i < cyphertext.length; i += 1) {
    const shift = this.key.charCodeAt(i % this.key.length) - 97;
    const code = cyphertext.charCodeAt(i);

    plaintext += String.fromCharCode((((code - 97 - shift) % 26)+26) % 26 + 97);
  }

  return plaintext;
};

module.exports = Cipher;

