
export interface Graph<V, E> {
  print(): void;
  edgesSize(): number;
  verticesSize(): number;

  addVertex(v: V): void;
  addEdge(from: V, to: V): void;
  addEdge(from: V, to: V, weight: E): void;

  removeVertex(v: V): void;
  removeEdge(from: V, to: V): void;

  bfs(begin: V, visitor: VertexVisitor): void;
  dfs(begin: V, visitor: VertexVisitor): void;
}

export interface VertexVisitor<V> {
  visit(v: V): boolean;
}

export interface WeightManager<E> {
  compare(w1: E, w2: E): number;
  add(w1: E, w2: E): E;
  zero(): E;
}
