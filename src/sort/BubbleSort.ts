import { Sort } from './Sort';

/**
 * 冒泡排序
 * 执行流程(升序)
 * 1 从头开始比较每一对相邻元素，如果第1个比第2个大，就交换它们的位置 
 *   ✓ 执行完一轮后，最末尾那个元素就是最大的元素
 * 2 忽略 1 中曾经找到的最大元素，重复执行步骤 1，直到全部元素有序
 *  
 */
export class BubbleSort extends Sort {
  constructor() {
    super();
    this.name = 'BubbleSort';
  }

  reallySort() {
    for (let end = this.array.length - 1; end > 0; end--) {
      for (let begin = 1; begin <= end; begin++) {
        if (this.cmp(begin - 1, begin) > 0) {
          this.swap(begin - 1, begin);
        }
      }
    }
  }
}

