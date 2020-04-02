import { Sort } from './Sort';

/**
 * 归并排序
 * 执行流程(升序)
 * 1 不断地将当前序列平均分割成2个子序列
 *   ✓ 直到不能再分割（序列中只剩1个元素））
 * 2 不断地将2个子序列合并成一个有序序列
 *  ✓ 直到最终只剩下一个有序序列
 *  
 * ◼归并排序花费的时间
 * T(n) = 2∗T(n/2) +O(n)
 * T(1) = O(1)
 * T(n)/n = T(n/2)/(n/2)+O(1)
 * 
 * ◼令S(n) = T(n)/n
 * S(1) = O(1)
 * S(n) = S(n/2)+O(1) = S(n/4)+O(2) = S(n/8)+O(3) = S(n/2k)+O(k) = S(1)+O(logn) = O(logn)
 * T(n) = n∗S(n) = O(nlogn)
 * 
 * ◼由于归并排序总是平均分割子序列，所以最好、最坏、平均时间复杂度都是 O(nlogn) ，属于稳定排序
 * 
 * ◼从代码中不难看出:归并排序的空间复杂度是O(n/2+logn) = O(n)
 * n/2 用于临时存放左侧数组，logn 是因为递归调用
 * 
 */

export class MergeSort extends Sort {

  private leftArray: number[];

  constructor() {
    super();
    this.name = 'MergeSort';
    this.leftArray = [];
  }

  reallySort() {
    this.mergeSort(0, this.array.length);
  }

  /**
   * 对 [begin, end) 范围的数据进行归并排序
   */
  mergeSort(begin: number, end: number) {

    // <2 代表已经只有一个元素了
    if (end - begin < 2) return;

    const mid = Math.floor((begin + end) / 2);
    this.mergeSort(begin, mid);
    this.mergeSort(mid, end);
    this.merge(begin, mid, end);
  }
  /**
   * 将 [begin, mid) 和 [mid, end) 范围的序列合并成一个有序序列
   */
  merge(begin: number, mid: number, end: number) {

    let li = 0, le = mid - begin;
    let ri = mid, re = end;
    let ai = begin;

    // 备份左边数组
    for (let i = li; i < le; i++) {
      this.leftArray[i] = this.array[begin + i];
    }
    // 如果左边还没有结束, 左边结束了，右边本来就在右边，不用调整位置
    while (li < le) {
      if (ri < re && this.cmpElement(this.array[ri], this.leftArray[li]) < 0) {
        this.array[ai++] = this.array[ri++];
      } else {
        this.array[ai++] = this.leftArray[li++];
      }
    }

    // const leftArray = [];
    // for (let index = begin; index < mid; index++) {
    //   leftArray.push(this.array[index]);
    // }

    // let li = 0;
    // let le = leftArray.length;
    // let ri = mid;
    // let re = end;
    // let ai = begin;
    // while (li < le && ri < re) {
    // if (this.cmpElement(leftArray[li], this.array[ri]) <= 0) {
    //   this.array[ai++] = leftArray[li++];
    // } else {
    //   this.array[ai++] = this.array[ri++];
    // }
    // }

    // while (li < le) {
    //   this.array[ai++] = leftArray[li++];
    // }
  }
}

