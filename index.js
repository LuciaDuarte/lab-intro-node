class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (this.items.length - 1 < pos) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    let auxSum = 0;
    if (this.items.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        auxSum += this.items[i];
      }
    }
    return auxSum;
  }

  avg() {
    let auxSum = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        auxSum += this.items[i];
      }
    }
    return auxSum / this.items.length;
  }
}

module.exports = SortedList;
