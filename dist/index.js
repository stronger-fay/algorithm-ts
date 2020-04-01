"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const sort_1 = require("./sort");
const testSorts = (array, ...sorts) => {
    sorts.forEach((sort) => {
        const newArray = [...array];
        sort.sort(newArray);
        tools_1.Asserts.test(tools_1.Integers.isAscOrder(newArray));
    });
    sorts.forEach((sort) => {
        console.log(sort.toString());
    });
};
const array = tools_1.Integers.random(10000, 0, 20000);
// console.log('origin array: ', array);
testSorts(array, new sort_1.BubbleSort(), new sort_1.SelectionSort(), new sort_1.HeapSort(), new sort_1.InsertionSort());
