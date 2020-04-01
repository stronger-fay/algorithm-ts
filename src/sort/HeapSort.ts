import { Sort } from './Sort';
/**
 * 堆排序
 * 
 * ◼ 堆排序可以认为是对选择排序的一种优化
 * 
 * 执行流程(升序)
 * 1 对序列进行原地建堆(heapify)
 * 2 重复执行以下操作，直到堆的元素数量为 1
 *  ✓ 交换堆顶元素与尾元素
 *  ✓堆的元素数量减 1
 *  ✓对 0 位置进行 1 次 siftDown 操作
 *  
 * ◼ 最好、最坏、平均时间复杂度:O(nlogn)，空间复杂度:O(1)，属于不稳定排序
 */

export class HeapSort extends Sort {

  private heapSize: number;

  constructor() {
    super();
    this.name = 'HeapSort';
    this.heapSize = 0;
  }

  reallySort() {
    // 原地建堆
    this.heapSize = this.array.length;
    for (let i = (this.heapSize >> 1) - 1; i >= 0; i--) {
      this.siftDown(i);
    }

    while (this.heapSize > 1) {
      // 交换堆顶元素和尾部元素
      this.swap(0, --this.heapSize);

      // 对0位置进行siftDown（恢复堆的性质）
      this.siftDown(0)
    }
  }

  siftDown(index: number) {
    const element = this.array[index];

    const half = this.heapSize >> 1;
    while (index < half) { // index 必须是非叶子节点
      // 默认是左边跟父节点比
      let childIndex = (index << 1) + 1;
      let child = this.array[childIndex];

      const rightIndex = childIndex + 1;
      // 右子节点比左子节点大
      if (rightIndex < this.heapSize && this.cmpElement(this.array[rightIndex], child) > 0) {
        childIndex = rightIndex;
        child = this.array[childIndex];
      }

      // 大于等于子节点
      if (this.cmpElement(element, child) >= 0) {
        break;
      }

      this.array[index] = child;
      index = childIndex;
    }
    this.array[index] = element;
  }
}