
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
}

export interface VertexVisitor<V> {
  visit(v: V): boolean;
}

export interface WeightManager<E> {
  compare(w1: E | undefined, w2: E | undefined): number | undefined;
  add(w1: E | undefined, w2: E | undefined): E | undefined;
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
}