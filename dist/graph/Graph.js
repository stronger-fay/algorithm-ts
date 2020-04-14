"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("../base/link");
class Graph {
    constructor(weightManager) {
        this.weightManager = weightManager;
    }
}
exports.Graph = Graph;
class EdgeInfo {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    ;
}
exports.EdgeInfo = EdgeInfo;
class PathInfo {
    constructor(weight) {
        this.edgeInfos = new link_1.LinkedList();
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getEdgeInfos() {
        return this.edgeInfos;
    }
    setEdgeInfos(edgeInfos) {
        this.edgeInfos = edgeInfos;
    }
    toString() {
        let edges = '';
        for (let i = 0; i < this.edgeInfos.length(); i++) {
            const edge = this.edgeInfos.get(i);
            edges += `${edge.toString()};`;
        }
        return "PathInfo [weight=" + this.weight + ", edgeInfos=" + this.edgeInfos + "]";
    }
}
exports.PathInfo = PathInfo;
