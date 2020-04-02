import { Integers, Times, Asserts } from '../tools'
import { Sort } from './Sort';
import { BubbleSort } from './BubbleSort';
import { SelectionSort } from './SelectionSort';
import { HeapSort } from './HeapSort';
import { InsertionSort } from './InsertionSort';
import { MergeSort } from './MergeSort';
import { QuickSort } from './QuickSort';
import { ShellSort } from './ShellSort';
import { CountingSort } from './CountingSort';

const testSorts = (array: number[], ...sorts: Sort[]) => {
  sorts.forEach((sort: Sort) => {
    const newArray = [...array];
    sort.sort(newArray);
    Asserts.test(Integers.isAscOrder(newArray));
  });

  sorts.forEach((sort: Sort) => {
    console.log(sort.toString());
  })
}


const array: number[] = Integers.random(10000, 0, 20000);
// console.log('origin array: ', array);

testSorts(
  array,
  new BubbleSort(),
  new SelectionSort(),
  new HeapSort(),
  new InsertionSort(),
  new MergeSort(),
  new QuickSort(),
  new ShellSort(),
  new CountingSort(),
);