"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
// const BubbleSort = require('./sort/cmp/BubbleSort.js');
// const SelectionSort = require('./sort/cmp/SelectionSort.js');
// const HeapSort = require('./sort/cmp/HeapSort.js');
// const testSorts = (array = [], ...sorts) => {
//   sorts.forEach(sort => {
//     const newArray = [...array];
//     sort.sort(newArray);
//     // Asserts.test(Integers.isAscOrder(newArray));
//   });
//   sorts.forEach(sort => {
//     console.log(sort.toString());
//   })
// }
const array = tools_1.Integers.random(10, 0, 20000);
console.log('array: ', array);
// testSorts(array, new BubbleSort(), new SelectionSort(), new HeapSort());
