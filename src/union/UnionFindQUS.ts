import { UnionFindQU } from './UnionFindQU';
/**
 * Quick Union - 基于size的优化
 */
export class UnionFindQUS extends UnionFindQU {

  private sizes: number[];
  constructor(capacity: number) {
    super(capacity);
    this.class = 'UnionFindQUS';

    this.sizes = new Array(capacity);
    this.sizes.fill(1, 0, this.sizes.length);
  }

  /**
   * 将v1的根节点嫁接到v2的根节点上
   * @param v1 
   * @param v2 
   */
  union(v1: number, v2: number): void {
    const p1 = this.find(v1);
    const p2 = this.find(v2);
    if (p1 === p2) {
      return;
    }

    // 判断 两个size,小的嫁接到多的上去
    if (this.sizes[p1] < this.sizes[p2]) {
      this.parents[p1] = p2;
      this.sizes[p2] += this.sizes[p1];
    } else {
      this.parents[p2] = p1;
      this.sizes[p1] += this.sizes[p2];
    }
  }
}