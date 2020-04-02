"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnionFind {
    constructor(capacity) {
        this.class = 'UnionFind';
        if (capacity < 0) {
            throw new Error('capacity must be >= 1');
        }
        this.parents = [];
        for (let index = 0; index < capacity; index++) {
            this.parents[index] = index;
        }
    }
    /**
     * 检查v1、v2是否属于同一个集合
     * @param v1
     * @param v2
     */
    isSame(v1, v2) {
        return this.find(v1) === this.find(v2);
    }
    rangeCheck(v) {
        if (v < 0 || v >= this.parents.length) {
            throw new Error('v is out of bounds');
        }
    }
}
exports.UnionFind = UnionFind;
