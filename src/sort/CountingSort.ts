import { Sort } from './Sort';

/**
 * 计数排序
 * 
 * ◼ 之前学习的冒泡、选择、插入、归并、快速、希尔、堆排序，都是基于比较的排序
 *  平均时间复杂度目前最低是 O(nlogn)
 * ◼ 计数排序、桶排序、基数排序，都不是基于比较的排序
 *  它们是典型的用空间换时间，在某些时候，平均时间复杂度可以比 O(nlogn) 更低
 * ◼计数排序于1954年由Harold H. Seward提出，适合对一定范围内的整数进行排序
 * ◼ 计数排序的核心思想
 *  统计每个整数在序列中出现的次数，进而推导出每个整数在有序序列中的索引
 * 
 * 执行流程(升序)
 * 1. 找出最大值
 * 2. 开辟内存空间，存储每个整数出现的次数
 * 3. 统计每个整数出现的次数
 * 4. 根据整数的出现次数，对整数进行排序
 *  
 */
export class CountingSort extends Sort {
  constructor() {
    super();
    this.name = 'CountingSort';
  }

  reallySort() {

    // 找出最大值
    let max: number = this.array[0];
    for (let index = 1; index < this.array.length; index++) {
      if (this.array[index] > max) {
        max = this.array[index];
      }
    } // O(n)

    // 开辟内存空间，存储每个整数出现的次数
    const counts = new Array(max + 1);
    counts.fill(0, 0, counts.length);

    // 统计每个整数出现的次数
    for (let index = 0; index < this.array.length; index++) {
      const value = this.array[index];
      counts[value]++;
    } // O(n)


    // 根据整数的出现次数，对整数进行排序

    let index = 0;
    for (let i = 0; i < counts.length; i++) {
      let count = counts[i];
      while (count-- > 0) {
        this.array[index++] = i;
      }
    }
    console.log('this.array: ', this.array);

  }
}

