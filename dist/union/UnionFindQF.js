"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnionFind_1 = require("./UnionFind");
/**
 * Quick Find
 */
class UnionFindQF extends UnionFind_1.UnionFind {
    constructor(capacity) {
        super(capacity);
        this.class = 'UnionFindQF';
    }
    /**
     * 父节点就是根节点
     *
     * @param v
     */
    find(v) {
        this.rangeCheck(v);
        return this.parents[v];
    }
    /**
     * 将v1所在集合的所有元素，都嫁接到v2的父节点上
     * @param v1
     * @param v2
     */
    union(v1, v2) {
        const p1 = this.find(v1);
        const p2 = this.find(v2);
        if (p1 === p2) {
            return;
        }
        for (let i = 0; i < this.parents.length; i++) {
            if (this.parents[i] == p1) {
                this.parents[i] = p2;
            }
        }
    }
}
exports.UnionFindQF = UnionFindQF;
