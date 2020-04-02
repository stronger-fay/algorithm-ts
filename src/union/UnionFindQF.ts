import { UnionFind } from './UnionFind';

/**
 * Quick Find
 */
export class UnionFindQF extends UnionFind {
  constructor(capacity: number) {
    super(capacity);
    this.class = 'UnionFindQF';
  }

  /**
   * 父节点就是根节点
   * 
   * @param v 
   */
  find(v: number): number {
    this.rangeCheck(v);
    return this.parents[v];
  }

  /**
   * 将v1所在集合的所有元素，都嫁接到v2的父节点上
   * @param v1 
   * @param v2 
   */
  union(v1: number, v2: number): void {
    const p1 = this.find(v1);
    const p2 = this.find(v2);
    if (p1 === p2) {
      return;
    }

    for (let i = 0; i < this.parents.length; i++) {
      if (this.parents[i] == p1) {
        this.parents[i] = p2;
      }
    }
  }
}