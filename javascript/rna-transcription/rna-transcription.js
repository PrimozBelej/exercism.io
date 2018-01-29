var DnaTranscriber = function() {};

DnaTranscriber.prototype.complement = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'};

DnaTranscriber.prototype.toRna = function(dna) {
  if (/[^CGAT]/.test(dna)) {
    throw Error('Invalid input');
  } else {
    return dna.split('').map(x => this.complement[x]).join('');
  }
};

module.exports = DnaTranscriber;
