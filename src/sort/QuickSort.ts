import { Sort } from './Sort';

/**
 * 快速排序
 * 执行流程(升序)
 * 1 从序列中选择一个轴点元素(pivot) 
 *  ✓假设每次选择 0 位置的元素为轴点元素
 * 2 利用 pivot 将序列分割成 2 个子序列
 *  ✓将小于 pivot 的元素放在pivot前面(左侧)
 *  ✓将大于 pivot 的元素放在pivot后面(右侧)
 *  ✓ 等于pivot的元素放哪边都可以
 * 3 对子序列进行 1 2 操作
 * ✓ 直到不能再分割(子序列中只剩下1个元素)
 * 
 *  
 * ◼快速排序的本质
 * 逐渐将每一个元素都转换成轴点元素
 * 
 * ◼ 在轴点左右元素数量比较均匀的情况下，同时也是最好的情况
 *  T(n) = 2∗T(n/2)+O(n) = O(nlogn)
 * ◼ 如果轴点左右元素数量极度不均匀，最坏情况
 *  T(n) = T(n−1)+O(n) =O(n^2)
 * ◼ 为了降低最坏情况的出现概率，一般采取的做法是
 *  随机选择轴点元素
 * ◼ 最好、平均时间复杂度:O(nlogn)
 * ◼ 最坏时间复杂度:O(n^2)
 * ◼ 由于递归调用的缘故，空间复杂度:O(logn)
 * ◼ 属于不稳定排序
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

