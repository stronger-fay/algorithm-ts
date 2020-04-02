import { UnionFind } from './UnionFind';
/**
 * Quick Union
 */
export class UnionFindQU extends UnionFind {
  constructor(capacity: number) {
    super(capacity);
    this.class = 'UnionFindQU';
  }

  /**
   * 通过parent链条不断地向上找，直到找到根节点
   * @param v 
   */
  find(v: number): number {
    this.rangeCheck(v);

    while (this.parents[v] !== v) {
      v = this.parents[v];
    }
    return v;
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

    this.parents[p1] = p2;
  }
}