import { ListGraph } from './ListGraph';
import { Graph, WeightManager } from './Graph';
import { Data } from './Data';


testBfs();
testDfs();


/**
 * 测试深度优先搜索
 */
function testDfs(): void {
  const graph: Graph<any, number> = directedGraph(Data.DFS_01);
  graph.bfs(0, {
    visit: function (v: any): boolean {
      console.log(v);
      return false;
    }
  });
}

/**
 * 测试广度优先搜索
 */
function testBfs(): void {
  const graph: Graph<any, number> = directedGraph(Data.BFS_01);
  graph.bfs('A', {
    visit: function (v: any): boolean {
      console.log(v);
      return false;
    }
  });
}

/**
 * 测试图的基本api
 */
function test() {
  // const graph = new ListGraph();
  const graph: Graph<string, number> = new ListGraph<string, number>();

  // 测试添加顶点
  // graph.addVertex('V10');
  // graph.print();

  // 测试添加边
  // graph.addEdge('V1', 'V0', 9);
  // graph.addEdge('V1', 'V2', 3);
  // graph.addEdge('V2', 'V0', 2);
  // graph.addEdge('V2', 'V3', 5);
  // graph.addEdge('V3', 'V4', 1);
  // graph.addEdge('V0', 'V4', 6);
  // graph.print();

  // // 测试移除边
  // graph.removeEdge('V0', 'V4');
  // graph.removeEdge('V0', 'V4');
  // graph.print();

  // // 测试移除顶点
  // graph.removeVertex('V1');
  // graph.removeVertex('V1');
  // graph.print();

  // bfs dfs 测试
  graph.addEdge('V1', 'V0', 9);
  graph.addEdge('V1', 'V2', 3);
  graph.addEdge('V2', 'V0', 2);
  graph.addEdge('V2', 'V3', 5);
  graph.addEdge('V3', 'V4', 1);
  graph.addEdge('V0', 'V4', 6);

  graph.bfs('V1', {
    visit: (v: any): boolean => {
      console.log('bfs: ', v);
      return v === 'V2';
    }
  });

  graph.dfs('V1', {
    visit: (v: any): boolean => {
      console.log('dfs: ', v);
      return v === 'V4';
    }
  });
}



/**
 * 权重管理器
 */
const weightManager: WeightManager<number> = {
  compare(w1: number, w2: number): number {
    return w1 + w2;
  },
  add(w1: number, w2: number): number {
    return w1 + w2;
  },
  zero(): number {
    return 0.0;
  }
};

/**
 * 有向图
 */
function directedGraph(data: any[][]): Graph<any, number> {
  const graph: Graph<any, number> = new ListGraph();

  for (const edge of data) {
    if (edge.length == 1) {
      graph.addVertex(edge[0]);
    } else if (edge.length == 2) {
      graph.addEdge(edge[0], edge[1]);
    } else if (edge.length == 3) {
      const weight: number = parseFloat(edge[2].toString());
      graph.addEdge(edge[0], edge[1], weight);
    }
  }
  return graph;
}

/**
 * 无向图
 * @param data
 * @return
 */
function undirectedGraph(data: any[][]): Graph<any, number> {
  const graph: Graph<any, number> = new ListGraph();
  for (const edge of data) {
    if (edge.length == 1) {
      graph.addVertex(edge[0]);
    } else if (edge.length == 2) {
      graph.addEdge(edge[0], edge[1]);
      graph.addEdge(edge[1], edge[0]);
    } else if (edge.length == 3) {
      const weight: number = parseFloat(edge[2].toString());
      graph.addEdge(edge[0], edge[1], weight);
      graph.addEdge(edge[1], edge[0], weight);
    }
  }
  return graph;
}
