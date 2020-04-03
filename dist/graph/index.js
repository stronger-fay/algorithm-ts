"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListGraph_1 = require("./ListGraph");
const Data_1 = require("./Data");
testBfs();
testDfs();
/**
 * 测试深度优先搜索
 */
function testDfs() {
    const graph = directedGraph(Data_1.Data.DFS_01);
    graph.bfs(0, {
        visit: function (v) {
            console.log(v);
            return false;
        }
    });
}
/**
 * 测试广度优先搜索
 */
function testBfs() {
    const graph = directedGraph(Data_1.Data.BFS_01);
    graph.bfs('A', {
        visit: function (v) {
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
    const graph = new ListGraph_1.ListGraph();
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
        visit: (v) => {
            console.log('bfs: ', v);
            return v === 'V2';
        }
    });
    graph.dfs('V1', {
        visit: (v) => {
            console.log('dfs: ', v);
            return v === 'V4';
        }
    });
}
/**
 * 权重管理器
 */
const weightManager = {
    compare(w1, w2) {
        return w1 + w2;
    },
    add(w1, w2) {
        return w1 + w2;
    },
    zero() {
        return 0.0;
    }
};
/**
 * 有向图
 */
function directedGraph(data) {
    const graph = new ListGraph_1.ListGraph();
    for (const edge of data) {
        if (edge.length == 1) {
            graph.addVertex(edge[0]);
        }
        else if (edge.length == 2) {
            graph.addEdge(edge[0], edge[1]);
        }
        else if (edge.length == 3) {
            const weight = parseFloat(edge[2].toString());
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
function undirectedGraph(data) {
    const graph = new ListGraph_1.ListGraph();
    for (const edge of data) {
        if (edge.length == 1) {
            graph.addVertex(edge[0]);
        }
        else if (edge.length == 2) {
            graph.addEdge(edge[0], edge[1]);
            graph.addEdge(edge[1], edge[0]);
        }
        else if (edge.length == 3) {
            const weight = parseFloat(edge[2].toString());
            graph.addEdge(edge[0], edge[1], weight);
            graph.addEdge(edge[1], edge[0], weight);
        }
    }
    return graph;
}
