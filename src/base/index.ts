import { MinHeap } from './MinHeap';

class Comparator<E>{
  compare: (e1: E, e2: E) => number;

  constructor(compare: (e1: E, e2: E) => number) {
    this.compare = compare;
  }
}

interface Comparable<E> {
  compareTo(e: E): number;
}

export {
  MinHeap,
  Comparator,
  Comparable,
}