"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnionFindQUR_1 = require("./UnionFindQUR");
/**
 * Quick Union - 基于 rank 的优化 - 路径分裂(Path Spliting)
 */
class UnionFindQURPS extends UnionFindQUR_1.UnionFindQUR {
    constructor(capacity) {
        super(capacity);
        this.class = 'UnionFindQURPS';
    }
    /**
    * 通过parent链条不断地向上找，直到找到根节点
    * 使路径上的每个节点都指向其祖父节点（parent的parent）
    * @param v
    */
    find(v) {
        this.rangeCheck(v);
        while (v != this.parents[v]) {
            const p = this.parents[v];
            this.parents[v] = this.parents[this.parents[v]];
            v = p;
        }
        return v;
    }
}
exports.UnionFindQURPS = UnionFindQURPS;
