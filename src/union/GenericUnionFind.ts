
class Node<V> {
  parent: Node<V> = this;
  value: V;
  rank: number = 1;

  constructor(value: V) {
    this.value = value;
  }
}

export class GenericUnionFind<V> {
  class: string;
  private nodes: Map<V, Node<V>> = new Map();

  constructor() {
    this.class = 'GenericUnionFind';
  }

  makeSet(v: V) {
    if (this.nodes.has(v)) return;
    this.nodes.set(v, new Node(v));
  }

  /**
   * 找出v的根节点
   */
  private findNode(v: V): Node<V> | undefined {
    let node = this.nodes.get(v);
    if (node == undefined) return undefined;

    // 一直找到父节点
    while (node.value !== node.parent.value) {
      node.parent = node.parent.parent;
      node = node.parent;
    }
    return node;
  }

  /**
   * 查找v所属的集合（根节点）
   * 
   * @param v 
   */
  find(v: V): V | undefined {
    const node = this.findNode(v);
    return (node && node.value) || undefined;
  };

  /**
   * 合并v1、v2所在的集合
   * @param v1 
   * @param v2 
   */
  union(v1: V, v2: V): void {
    const p1 = this.findNode(v1);
    const p2 = this.findNode(v2);
    if (p1 === undefined || p2 === undefined) return;
    if (p1.value === p2.value) return;

    // UnionFind_QU_R
    if (p1.rank < p2.rank) {
      p1.parent = p2;
    } else if (p1.rank > p2.rank) {
      p2.parent = p1;
    } else {
      p1.parent = p2;
      p2.rank += 1;
    }
  };

  /**
   * 检查v1、v2是否属于同一个集合
   * @param v1 
   * @param v2 
   */
  public isSame(v1: V, v2: V): boolean {
    return this.find(v1) === this.find(v2);
  }
}