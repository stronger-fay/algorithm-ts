import { UnionFindQUR } from './UnionFindQUR';
/**
 * Quick Union - 基于 rank 的优化 - 路径减半(Path Halving)
 */
export class UnionFindQURPH extends UnionFindQUR {

  constructor(capacity: number) {
    super(capacity);
    this.class = 'UnionFindQURPH';
  }

  /**
  * 通过parent链条不断地向上找，直到找到根节点
  * 并将经过的节点都修改为根节点
  * @param v 
  */
  find(v: number): number {
    this.rangeCheck(v);

    while (this.parents[v] !== v) {
      this.parents[v] = this.parents[this.parents[v]];
      v = this.parents[v];
    }
    return v;
  }
}