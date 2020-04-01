import { Integers, Times, Asserts } from './tools'

// import Integers = require('./tools/Integers');
// import Asserts = require('./tools/Asserts');
// import Times = require('./tools/Times');

import Sort = require('./sort/Sort');

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


const array = Integers.random(10, 0, 20000);

console.log('array: ', array);

// testSorts(array, new BubbleSort(), new SelectionSort(), new HeapSort());