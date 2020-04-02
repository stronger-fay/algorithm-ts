"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const BubbleSort_1 = require("./BubbleSort");
const SelectionSort_1 = require("./SelectionSort");
const HeapSort_1 = require("./HeapSort");
const InsertionSort_1 = require("./InsertionSort");
const MergeSort_1 = require("./MergeSort");
const QuickSort_1 = require("./QuickSort");
const ShellSort_1 = require("./ShellSort");
const CountingSort_1 = require("./CountingSort");
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
testSorts(array, new BubbleSort_1.BubbleSort(), new SelectionSort_1.SelectionSort(), new HeapSort_1.HeapSort(), new InsertionSort_1.InsertionSort(), new MergeSort_1.MergeSort(), new QuickSort_1.QuickSort(), new ShellSort_1.ShellSort(), new CountingSort_1.CountingSort());
