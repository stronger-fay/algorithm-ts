"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
