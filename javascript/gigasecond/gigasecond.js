var Gigasecond = function(birth) {
  if (!birth instanceof Date) {
    throw Error('Not a date.');
  } else {
    this.birth = birth;
  }
};

Gigasecond.prototype.date = function() {
  return new Date(this.birth.getTime() + Math.pow(10, 12));
};

module.exports = Gigasecond;
