import { Sort } from './Sort';

/**
 * 选择排序
 * 执行流程(升序)
 * 1 从序列中找出最大的那个元素，然后与最末尾的元素交换位置
 *   ✓ 执行完一轮后，最末尾的那个元素就是最大的元素
 * 2 忽略 1 中曾经找到的最大元素，重复执行步骤 1
 * 
 * ◼思考
 *  选择排序是否还有优化的空间?
 *  ✓ 使用堆来选择最大值
 * ◼ 选择排序的交换次数要远远少于冒泡排序，平均性能优于冒泡排序*
 * ◼ 最好、最坏、平均时间复杂度:O(n2)，空间复杂度:O(1)，属于不稳定排序
 *  
 */

export class SelectionSort extends Sort {
  constructor() {
    super();
    this.name = 'SelectionSort';
  }

  reallySort() {
    for (let end = this.array.length - 1; end > 0; end--) {
      let max = 0;
      for (let begin = 1; begin <= end; begin++) {
        if (this.cmp(max, begin) < 0) {
          max = begin;
        }
      }
      this.swap(max, end);

    }
  }
}

