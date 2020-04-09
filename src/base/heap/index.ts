
import { MaxHeap } from './MaxHeap';
import { MinHeap } from './MinHeap';
import { BinaryHeap } from './BinaryHeap';

import { Comparator } from '../index';

function testMaxBinaryHeap() {
  console.log('testMaxBinaryHeap');

  const heap = new BinaryHeap<number>([30, 34, 73, 60, 68, 43], new Comparator((e1, e2) => {
    return e1 - e2;
  }));

  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap);
}

function testMinBinaryHeap() {
  console.log('testMinBinaryHeap');

  const heap = new BinaryHeap<number>([30, 34, 73, 60, 68, 43], new Comparator((e1, e2) => {
    return e2 - e1;
  }));

  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap);
}


function testMaxHeap() {
  console.log('testMaxHeap');
  const heap = new MaxHeap<number>([30, 34, 73, 60, 68, 43], new Comparator((e1, e2) => {
    return e1 - e2;
  }));

  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap);
}

function testMinHeap() {
  console.log('testMinHeap');
  const heap = new MinHeap<number>([30, 34, 73, 60, 68, 43], new Comparator((e1, e2) => {
    return e1 - e2;
  }));

  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap.remove());
  console.log(heap);
}


testMaxBinaryHeap();
testMinBinaryHeap();
testMaxHeap();
testMinHeap();