
class Comparator<E>{
  compare: (e1: E, e2: E) => number;

  constructor(compare: (e1: E, e2: E) => number) {
    this.compare = compare;
  }
}
export {
  Comparator,
}
