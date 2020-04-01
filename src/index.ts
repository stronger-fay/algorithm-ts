import { Integers, Times, Asserts } from './tools'
import { Sort, BubbleSort, SelectionSort, HeapSort, InsertionSort, MergeSort } from './sort';

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


const array: number[] = Integers.random(20000, 0, 20000);
// console.log('origin array: ', array);
testSorts(
  array,
  new BubbleSort(),
  new SelectionSort(),
  new HeapSort(),
  new InsertionSort(),
  new MergeSort(),
);