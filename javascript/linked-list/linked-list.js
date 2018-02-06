var LinkedList = function() {
  this.first = new Node(null, null);
};

LinkedList.prototype.push = function(value) {
  var last = this.first;
  while (last.next !== null) {
    last = last.next;
  }

  last.value = value;
  last.next = new Node(null, null);
};

LinkedList.prototype.pop = function() {
  if (this.first.next === null) {
    return null;
  }

  var last = this.first;
  while (last.next.next !== null) {
    last = last.next;
  }

  const value = last.value;
  last.value = null;
  last.next = null;
  return value;
};

LinkedList.prototype.unshift = function(value) {
  const temp = this.first;
  this.first = new Node(value, temp);
};

LinkedList.prototype.shift = function() {
  if (this.first.next === null) {
    return null;
  }

  const value = this.first.value;
  this.first = this.first.next;
  return value;
};

LinkedList.prototype.delete = function(value) {
  if (this.first.next === null) {
    return;
  }

  var last = this.first;
  while (last.next !== null) {
    if (last.value === value) {
      last.value = last.next.value;
      last.next = last.next.next;
      break;
    }
    last = last.next;
  }
};

LinkedList.prototype.count = function() {
  var count = 1;
  var last = this.first;
  while (last.next !== null) {
    last = last.next;
    count += 1;
  }

  return count-1;
};

module.exports = LinkedList;

var Node = function(value, next) {
  this.value = value;
  this.next = next;
};
