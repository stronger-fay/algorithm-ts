import { UnionFindQUR } from './UnionFindQUR';
/**
 * Quick Union - 基于 rank 的优化 - 路径压缩（Path Compression）
 */
export class UnionFindQURPC extends UnionFindQUR {

  constructor(capacity: number) {
    super(capacity);
    this.class = 'UnionFindQURPC';
  }

  /**
  * 通过parent链条不断地向上找，直到找到根节点
  * 使路径上的每个节点都指向其根节点
  * @param v 
  */
  find(v: number): number {
    this.rangeCheck(v);

    if (this.parents[v] !== v) {  // v == 1, parents[v] == 2
      this.parents[v] = this.find(this.parents[v]); // 递归修改每个节点
    }
    return this.parents[v];
  }
}