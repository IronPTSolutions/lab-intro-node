class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this._sort();
    this.length++;
  }

  get(i) {
    return this.items[i - 1];
  }

  max() {
    return this.get(this.length);
  }

  min() {
    return this.get(1);
  }

  average() {
    this._checkEmpty();
    
    return this.sum() / this.length;
  }

  sum() {
    this._checkEmpty();

    return this.items.reduce((acc, i) => { return acc + i; });
  }

  _sort() {
    this.items = this.items.sort((a, b) => { return a - b; });
  }

  _checkEmpty() {
    if (this.length === 0) throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
