var SpaceAge = function(seconds) {
  if (typeof seconds !== 'number') {
    throw Error('Not a number.');
  } else {
    this.seconds = seconds;
  }
}

SpaceAge.prototype.onEarth = function() {
  return roundToTwo(this.seconds / 31557600);
};

SpaceAge.prototype.onMercury = function() {
  return roundToTwo(this.onEarth() / 0.2408467);
};

SpaceAge.prototype.onVenus = function() {
  return roundToTwo(this.onEarth() / 0.61519726);
};

SpaceAge.prototype.onMars = function() {
  return roundToTwo(this.onEarth() / 1.8808158);
};

SpaceAge.prototype.onJupiter = function() {
  return roundToTwo(this.onEarth() / 11.862615);
};

SpaceAge.prototype.onSaturn = function() {
  return roundToTwo(this.onEarth() / 29.447498);
};

SpaceAge.prototype.onUranus = function() {
  return roundToTwo(this.onEarth() / 84.016846);
};

SpaceAge.prototype.onNeptune = function() {
  return roundToTwo(this.onEarth() / 164.79132);
};

function roundToTwo(num) {    
  return Math.round(num * 100) / 100;
}

module.exports = SpaceAge;
