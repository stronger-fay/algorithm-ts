"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const Graph_1 = require("./Graph");
const base_1 = require("../base");
class ListGraph extends Graph_1.Graph {
    constructor(weightManager) {
        super(weightManager);
        this.vertices = new Map(); // 存放所有的顶点
        this.edges = new Set(); // 存放所有顶点的所有边
        this.edgeComparator = new base_1.Comparator((e1, e2) => {
            return this.weightManager.compare(e1.weight, e2.weight) || 0; // 比较失败，则返回0
        });
    }
    /**
     * 查看输出
     */
    print() {
        console.log('\n');
        console.log(`【顶点数量】 =>  【${this.verticesSize()}】`);
        this.vertices.forEach((e, index, self) => {
            console.log(`【顶点】 =>  ${e.value}`);
        });
        console.log(`【边数量】 =>  【${this.edgesSize()}】`);
        for (let edge of this.edges) { // 遍历Set
            console.log(`【边】 => ${edge.toString()}`);
        }
    }
    /**
     * 边的数量
     */
    edgesSize() {
        return this.edges.size;
    }
    /**
     * 顶点数量
     */
    verticesSize() {
        return this.vertices.size;
    }
    /**
     * 添加顶点，如果已存在，则忽略
     * @param v
     */
    addVertex(v) {
        if (this.vertices.has(v))
            return;
        this.vertices.set(v, new Vertex(v));
    }
    /**
     *
     * 添加边，如果存在旧的边，需要先移除
     *
     * @param from
     * @param to
     * @param weight
     */
    addEdge(from, to, weight) {
        // 判断from、to顶点是否存在
        let fromVertex = this.vertices.get(from);
        if (!fromVertex) {
            fromVertex = new Vertex(from);
            this.vertices.set(from, fromVertex);
        }
        let toVertex = this.vertices.get(to);
        if (!toVertex) {
            toVertex = new Vertex(to);
            this.vertices.set(to, toVertex);
        }
        // 创建要添加的边
        const edge = new Edge(fromVertex, toVertex);
        edge.weight = weight;
        // 如果存在旧的边，则先移除,
        // 相同的边的条件是 （起点、终点的值一样）， 因为无法自定义 哈希函数，所以只能通过自定义的 equals 函数来比对
        let oldEdge;
        for (let element of fromVertex.outEdges) { // 遍历Set
            if (element.equals(edge)) {
                oldEdge = element;
            }
        }
        if (oldEdge) {
            fromVertex.outEdges.delete(oldEdge);
            toVertex.inEdges.delete(oldEdge);
            this.edges.delete(oldEdge);
        }
        // 添加新的边
        fromVertex.outEdges.add(edge);
        toVertex.inEdges.add(edge);
        this.edges.add(edge);
    }
    /**
     * 移除顶点，需要同时移除顶点的 inEdges、outEdges、全局edges中的相关edge
     * @param v
     */
    removeVertex(v) {
        const vertex = this.vertices.get(v);
        if (!vertex)
            return;
        this.vertices.delete(v);
        var inEdgesIter = vertex.inEdges[Symbol.iterator]();
        let inEdge = inEdgesIter.next().value;
        do {
            if (inEdge) {
                inEdge.to.inEdges.delete(inEdge);
                // 将当前遍历到的元素edge从集合vertex.outEdges中删掉
                this.edges.delete(inEdge);
            }
            inEdge = inEdgesIter.next().value;
        } while (inEdge);
        var outEdgesIter = vertex.outEdges[Symbol.iterator]();
        let outEdge = outEdgesIter.next().value;
        do {
            if (outEdge) {
                outEdge.to.inEdges.delete(outEdge);
                // 将当前遍历到的元素edge从集合vertex.outEdges中删掉
                this.edges.delete(outEdge);
            }
            outEdge = outEdgesIter.next().value;
        } while (outEdge);
    }
    /**
     * 移除边
     * @param from
     * @param to
     */
    removeEdge(from, to) {
        const fromVertex = this.vertices.get(from);
        if (!fromVertex)
            return;
        const toVertex = this.vertices.get(to);
        if (!toVertex)
            return;
        // 创建要删除的边
        const edge = new Edge(fromVertex, toVertex);
        // 如果存在，则移除,
        // 相同的边的条件是 （起点、终点的值一样）， 因为无法自定义 哈希函数，所以只能通过自定义的 equals 函数来比对
        let oldEdge;
        for (let element of fromVertex.outEdges) { // 遍历Set
            if (element.equals(edge)) {
                oldEdge = element;
            }
        }
        if (oldEdge) {
            fromVertex.outEdges.delete(oldEdge);
            toVertex.inEdges.delete(oldEdge);
            this.edges.delete(oldEdge);
        }
    }
    /**
     * 广度优先遍历
     * @param v
     */
    bfs(begin, visitor) {
        if (!visitor)
            return;
        const beginVertex = this.vertices.get(begin);
        if (!beginVertex)
            return;
        // 遍历过的顶点集合
        const visitedSet = new Set();
        // 通过队列来实现 广度优先搜索
        const queue = [];
        // 起点入队
        queue.push(beginVertex);
        // 记录遍历过的对象
        visitedSet.add(beginVertex);
        while (queue.length !== 0) {
            let vertex = queue.pop();
            if (vertex === undefined)
                break;
            if (visitor.visit(vertex.value))
                return;
            // 将能直接到达的下一个顶点集合，加入到队列当中，需过滤掉访问过的顶点
            vertex.outEdges.forEach(element => {
                if (!visitedSet.has(element.to)) {
                    queue.push(element.to);
                    // 记录遍历过的对象
                    visitedSet.add(element.to);
                }
                ;
            });
        }
    }
    /**
      * 深度优先遍历
      * @param v
      */
    dfs(begin, visitor) {
        if (!visitor)
            return;
        let vertex = this.vertices.get(begin);
        if (!vertex)
            return;
        // 访问过的顶点集合
        const visitedSet = new Set();
        if (Math.random() > 0.5) {
            // 1. 非递归实现
            console.log('dfs 非递归:');
            this.dfsNormal(vertex, visitedSet, visitor);
        }
        else {
            // 2. 递归实现
            console.log('\ndfs 递归:');
            visitedSet.clear();
            this.dfsRecursion(vertex, visitedSet, visitor);
        }
    }
    /**
     * 深度优先遍历非递归实现
     */
    dfsNormal(vertex, visitedSet, visitor) {
        if (!vertex)
            return;
        // 1. 非递归实现
        const stack = [];
        stack.push(vertex);
        visitedSet.add(vertex);
        if (visitor.visit(vertex.value))
            return;
        while (stack.length !== 0) {
            vertex = stack.pop();
            if (!vertex)
                continue;
            for (const edge of vertex.outEdges) {
                if (visitedSet.has(edge.to))
                    continue;
                stack.push(edge.from);
                stack.push(edge.to);
                visitedSet.add(edge.to);
                if (visitor.visit(edge.to.value))
                    return;
                break;
            }
        }
    }
    /**
     * 深度优先遍历递归执行函数
     */
    dfsRecursion(vertex, visitedSet, visitor) {
        if (visitor.visit(vertex.value))
            return;
        visitedSet.add(vertex);
        for (const edge of vertex.outEdges) {
            if (!visitedSet.has(edge.to)) {
                this.dfsRecursion(edge.to, visitedSet, visitor);
            }
        }
    }
    /**
     * 拓扑排序
     */
    topologicalSort() {
        const list = new Array();
        // 入度为0的操作队列，当顶点的入度为0，添加到该队列当中
        const queue = new Array();
        // 存储所有节点的入度信息
        const ins = new Map();
        // 存储所有的顶点的入度数量，并将度为0的节点放进queue
        this.vertices.forEach((vertex) => {
            if (vertex.inEdges.size === 0) {
                queue.push(vertex);
            }
            else {
                ins.set(vertex, vertex.inEdges.size);
            }
        });
        // 操作queue中的顶点
        while (queue.length !== 0) {
            const vertex = queue.pop();
            if (!vertex)
                continue;
            // 入度为0的，放进list
            list.push(vertex.value);
            // 遍历该节点的出度，并将所有边的 to的入度数量减一，假如to的入度为0，则加入到queue
            vertex.outEdges.forEach((edge) => {
                if (edge) {
                    let value = (ins.get(edge.to) || 0) - 1;
                    if (value === 0) {
                        queue.push(edge.to);
                    }
                    else {
                        ins.set(edge.to, value);
                    }
                }
            });
        }
        return list;
    }
    /**
     *  最小生成树，prim、krushal
     */
    mst() {
        return Math.random() > 0.5 ? this.prim() : this.kruskal();
    }
    prim() {
        const edgeInfos = new Set();
        const it = this.vertices.values()[Symbol.iterator]();
        let vertex = it.next().value;
        if (vertex === undefined)
            return edgeInfos;
        const addedVertices = new Set();
        addedVertices.add(vertex);
        const heap = new base_1.MinHeap(vertex.outEdges, this.edgeComparator);
        const verticesSize = this.vertices.size;
        while (!heap.isEmpty() && addedVertices.size < verticesSize) {
            const edge = heap.remove();
            if (addedVertices.has(edge.to))
                continue;
            edgeInfos.add(edge.info());
            addedVertices.add(edge.to);
            heap.addAll(edge.to.outEdges);
        }
        return edgeInfos;
    }
    kruskal() {
        const set = new Set();
        return set;
    }
}
exports.ListGraph = ListGraph;
/**
 * 顶点类
 */
class Vertex {
    constructor(value) {
        this.value = value;
        this.inEdges = new Set();
        this.outEdges = new Set();
    }
    equals(vertex) {
        return _.isEqual(this.value, vertex.value);
    }
    toString() {
        return this.value === undefined ? "undefined" : this.value;
    }
}
/**
 * 边类
 */
class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    info() {
        return new Graph_1.EdgeInfo(this.from.value, this.to.value, this.weight);
    }
    equals(edge) {
        // 判断连个节点是否相等
        const customizer = (v1, v2) => {
            return v1.equals(v2);
        };
        // 如果边的起点、终点，内容相等，就是同一条边，权重weight不考虑
        return _.isEqualWith(this.from, edge.from, customizer) && _.isEqualWith(this.to, edge.to, customizer);
    }
    toString() {
        return "Edge [from=" + this.from.toString() + ", to=" + this.to.toString() + ", weight=" + this.weight + "]";
    }
}
