var Matrix = function(desc) {
  if (typeof desc !== 'string') {
    throw Error('Not a string.');
    this.rows = null;
  } else {
    this.rows = desc.split('\n').map((row) => row.split(' ').map((el) => parseInt(el)));

    this.columns = [];
    for (var i = 0; i < this.rows[0].length; i += 1) {
      this.columns.push([]);
      for (var j = 0; j < this.rows.length; j += 1) {
        this.columns[i].push(this.rows[j][i]);
      }
    }
  }
}

module.exports = Matrix;
