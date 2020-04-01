import { Sort } from './Sort';

/**
 * 快速排序
 * 执行流程(升序)
 *  
 */

export class QuickSort extends Sort {

  constructor() {
    super();
    this.name = 'QuickSort';
  }

  reallySort() {
    this.quickSort(0, this.array.length);
  }

  /**
   * 对 [begin, end) 范围的元素进行快速排序
   * @param begin
   * @param end
   */
  quickSort(begin: number, end: number) {
    if (end - begin < 2) return;
    // 确定轴点位置 O(n)
    const mid = this.pivotIndex(begin, end);
    // 对子序列进行快速排序
    this.quickSort(begin, mid);
    this.quickSort(mid + 1, end);
  }

  /**
   * 构造出 [begin, end) 范围的轴点元素
   * @return 轴点元素的最终位置
   */
  pivotIndex(begin: number, end: number): number {
    // 随机选择一个元素跟begin位置进行交换, 
    this.swap(begin, begin + parseInt(`${Math.random() * (end - begin)}`));

    // 备份begin位置的元素
    const pivot = this.array[begin];
    // end 指向最后一个元素
    end--;

    while (begin < end) {

      while (begin < end) {
        if (this.cmpElement(pivot, this.array[end]) < 0) { // 右边元素 > 轴点元素
          end--;
        } else { // 右边元素 <= 轴点元素
          this.array[begin++] = this.array[end];
          break;
        }
      }

      while (begin < end) {
        if (this.cmpElement(pivot, this.array[begin]) > 0) { // 左边元素 < 轴点元素
          begin++;
        } else { // 左边元素 >= 轴点元素
          this.array[end--] = this.array[begin];
          break;
        }
      }
    }

    // 将轴点元素放入最终位置
    this.array[begin] = pivot;

    // 返回轴点元素的位置
    return begin;
  }

}

