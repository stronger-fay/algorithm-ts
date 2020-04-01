import { Sort } from './Sort';

/**
 * 归并排序
 * 执行流程(升序)
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

