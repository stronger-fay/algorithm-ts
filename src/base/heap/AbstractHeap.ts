
import { Comparator } from '../index';
import { Heap } from './Heap';

export abstract class AbstractHeap<E> implements Heap<E> {
  protected size: number;
  protected comparator: Comparator<E>;

  constructor(comparator: Comparator<E>) {
    this.comparator = comparator;
    this.size = 0;
  }

  abstract clear(): void;
  abstract add(element: E): void;
  abstract get(): E;
  abstract remove(): E;
  abstract replace(element: E): E;

  length(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  compare(e1: E, e2: E): number {
    return this.comparator.compare(e1, e2);
  }
}
