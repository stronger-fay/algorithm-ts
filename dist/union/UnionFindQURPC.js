"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnionFindQUR_1 = require("./UnionFindQUR");
/**
 * Quick Union - 基于 rank 的优化 - 路径压缩（Path Compression）
 */
class UnionFindQURPC extends UnionFindQUR_1.UnionFindQUR {
    constructor(capacity) {
        super(capacity);
        this.class = 'UnionFindQURPC';
    }
    /**
    * 通过parent链条不断地向上找，直到找到根节点
    * 使路径上的每个节点都指向其根节点
    * @param v
    */
    find(v) {
        this.rangeCheck(v);
        if (this.parents[v] !== v) { // v == 1, parents[v] == 2
            this.parents[v] = this.find(this.parents[v]); // 递归修改每个节点
        }
        return this.parents[v];
    }
}
exports.UnionFindQURPC = UnionFindQURPC;
