"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListGraph_1 = require("./ListGraph");
// const graph = new ListGraph();
const graph = new ListGraph_1.ListGraph();
// 测试添加顶点
graph.addVertex('V10');
graph.print();
// 测试添加边
graph.addEdge('V1', 'V0', 9);
graph.addEdge('V1', 'V2', 3);
graph.addEdge('V2', 'V0', 2);
graph.addEdge('V2', 'V3', 5);
graph.addEdge('V3', 'V4', 1);
graph.addEdge('V0', 'V4', 6);
graph.print();
// 测试移除边
graph.removeEdge('V0', 'V4');
graph.removeEdge('V0', 'V4');
graph.print();
// 测试移除顶点
graph.removeVertex('V1');
graph.removeVertex('V1');
graph.print();
