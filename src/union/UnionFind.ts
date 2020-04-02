export abstract class UnionFind {
  /**
   * index: 值
   * value: 根节点的下标
   * index === value: 根节点
   */
  protected parents: number[];
  class: string;

  constructor(capacity: number) {
    this.class = 'UnionFind';
    if (capacity < 0) {
      throw new Error('capacity must be >= 1');
    }
    this.parents = [];

    for (let index = 0; index < capacity; index++) {
      this.parents[index] = index;
    }
  }

  /**
   * 查找v所属的集合（根节点）
   * 
   * @param v 
   */
  abstract find(v: number): number;

  /**
   * 合并v1、v2所在的集合
   * @param v1 
   * @param v2 
   */
  abstract union(v1: number, v2: number): void;

  /**
   * 检查v1、v2是否属于同一个集合
   * @param v1 
   * @param v2 
   */
  public isSame(v1: number, v2: number): boolean {
    return this.find(v1) === this.find(v2);
  }

  protected rangeCheck(v: number): void {
    if (v < 0 || v >= this.parents.length) {
      throw new Error('v is out of bounds');
    }
  }


}