import { LinkedList, List } from '../base/link';
export abstract class Graph<V, E> {
  protected weightManager: WeightManager<E>;

  constructor(weightManager: WeightManager<E>) {
    this.weightManager = weightManager;
  }

  abstract print(): void;
  abstract edgesSize(): number;
  abstract verticesSize(): number;

  abstract addVertex(v: V): void;
  abstract addEdge(from: V, to: V): void;
  abstract addEdge(from: V, to: V, weight: E): void;

  abstract removeVertex(v: V): void;
  abstract removeEdge(from: V, to: V): void;

  abstract bfs(begin: V, visitor: VertexVisitor<V>): void;
  abstract dfs(begin: V, visitor: VertexVisitor<V>): void;

  abstract mst(): Set<EdgeInfo<V, E>>; // 最小生成树（prim、kruskal）

  abstract topologicalSort(): V[]; // 拓扑排序

  abstract shortestPath(begin: V): Map<V, PathInfo<V, E>>; // 最短路径
}

export interface VertexVisitor<V> {
  visit(v: V): boolean;
}

// export interface WeightManager<E> {
//   compare(w1: E | undefined, w2: E | undefined): number | undefined;
//   add(w1: E | undefined, w2: E | undefined): E | undefined;
//   zero(): E;
// }

export interface WeightManager<E> {
  compare(w1: E, w2: E): number;
  add(w1: E, w2: E): E;
  zero(): E;
}


export class EdgeInfo<V, E> {
  from: V;
  to: V;
  weight?: E;

  constructor(from: V, to: V, weight?: E) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  };

  toString(): string {
    return "EdgeInfo [from=" + this.from + ", to=" + this.to + ", weight=" + this.weight + "]";
  }
}

export class PathInfo<V, E> {
  public weight: E | undefined;
  public edgeInfos: List<EdgeInfo<V, E>> = new LinkedList<EdgeInfo<V, E>>();

  constructor(weight?: E) {
    this.weight = weight;
  }

  public getWeight(): E | undefined {
    return this.weight;
  }
  public setWeight(weight: E | undefined): void {
    this.weight = weight;
  }
  public getEdgeInfos(): List<EdgeInfo<V, E>> {
    return this.edgeInfos;
  }
  public setEdgeInfos(edgeInfos: List<EdgeInfo<V, E>>): void {
    this.edgeInfos = edgeInfos;
  }

  public toString(): string {

    let edges = '';
    for (let i = 0; i < this.edgeInfos.length(); i++) {
      const edge = this.edgeInfos.get(i);
      edges += `${edge.toString()};`
    }

    return "PathInfo [weight=" + this.weight + ", edgeInfos=" + this.edgeInfos + "]";
  }
}