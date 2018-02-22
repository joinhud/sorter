class Sorter {
  constructor() {
    this.elements = [];
    this.size = 0;
    this.digitComparator = (left, right) => left - right;
    this.comparator = this.digitComparator;
  }

  add(element) {
    this.elements.push(element);
    this.size++;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.size;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    let valuesForSorting = [];

    indices.forEach(item => {
      valuesForSorting.push(this.elements[item]);
    });

    if (valuesForSorting.length) {
      indices.sort(this.digitComparator);
      valuesForSorting.sort(this.comparator);

      indices.forEach((item, index) => {
        this.elements[item] = valuesForSorting[index];
      });
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;