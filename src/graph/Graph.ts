
export interface Graph<V, E> {
  print(): void;
  edgesSize(): number;
  verticesSize(): number;

  addVertex(v: V): void;
  addEdge(from: V, to: V): void;
  addEdge(from: V, to: V, weight: E): void;

  removeVertex(v: V): void;
  removeEdge(from: V, to: V): void;

  bfs(begin: V): void;
  dfs(begin: V): void;
}
