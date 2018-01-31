var Bob = function() {};

Bob.prototype.hey = function(msg) {
  if (/^\s*$/.test(msg)) {
    return 'Fine. Be that way!';
  } else if (/[A-Z]+/.test(msg) && ! /[a-z]+/.test(msg)) {
    return 'Whoa, chill out!';
  } else if (/^.*\?\s*$/.test(msg)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
