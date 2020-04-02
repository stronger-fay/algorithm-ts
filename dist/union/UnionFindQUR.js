"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnionFindQU_1 = require("./UnionFindQU");
/**
 * Quick Union - 基于 rank 的优化, 树的高度
 */
class UnionFindQUR extends UnionFindQU_1.UnionFindQU {
    constructor(capacity) {
        super(capacity);
        this.class = 'UnionFindQUR';
        this.ranks = new Array(capacity);
        this.ranks.fill(1, 0, this.ranks.length);
    }
    /**
     * 将v1的根节点嫁接到v2的根节点上
     * @param v1
     * @param v2
     */
    union(v1, v2) {
        const p1 = this.find(v1);
        const p2 = this.find(v2);
        if (p1 === p2) {
            return;
        }
        // 判断rank
        if (this.ranks[p1] < this.ranks[p2]) {
            this.parents[p1] = p2;
        }
        else if (this.ranks[p1] > this.ranks[p2]) {
            this.parents[p2] = p1;
        }
        else {
            // 树高一样，则嫁接后，整体高度 +1
            this.parents[p1] = p2;
            this.ranks[p2]++;
        }
    }
}
exports.UnionFindQUR = UnionFindQUR;
