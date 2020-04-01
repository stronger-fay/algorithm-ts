"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
/**
 * 插入排序
 * 执行流程(升序)
 * 1 在执行过程中，插入排序会将序列分为2部分
 *   ✓ 头部是已经排好序的，尾部是待排序的
 * 2 从头部开始扫描每一个元素
 *  ✓ 每当扫描到一个元素，就将它插入到头部合适的位置，使得头部数据依然保持有序
 *
 * ◼ 插入排序的时间复杂度与逆序对的数量成正比关系
 *   逆序对的数量越多，插入排序的时间复杂度越高
 * ◼ 最坏、平均时间复杂度:O(n2)
 * ◼ 最好时间复杂度:O(n)
 * ◼ 空间复杂度:O(1)
 * ◼ 属于稳定排序
 * ◼ 当逆序对的数量极少时，插入排序的效率特别高
 *   甚至速度比 O nlogn 级别的快速排序还要快
 * ◼ 数据量不是特别大的时候，插入排序的效率也是非常好的
 */
class InsertionSort extends Sort_1.Sort {
    constructor() {
        super();
        this.name = 'InsertionSort';
    }
    reallySort() {
        for (let begin = 1; begin < this.array.length; begin++) {
            let index = begin;
            // 版本一
            // while (index > 0 && this.cmp(index, index - 1) < 0) {
            //   this.swap(index, index - 1);
            //   index--;
            // }
            /**
             * 版本二 （将交换替换为挪动）
             *
             * ◼ 思路是将【交换】转为【挪动】
             * 1 先将待插入的元素备份
             * 2 头部有序数据中比待插入元素大的，都朝尾部方向挪动1个位置
             * 3 将待插入元素放到最终的合适位置
             */
            const value = this.array[index];
            while (index > 0 && this.cmpElement(value, this.array[index - 1]) < 0) {
                this.array[index] = this.array[index - 1];
                index--;
            }
            this.array[index] = value;
        }
    }
}
exports.InsertionSort = InsertionSort;
