"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.parent = this;
        this.rank = 1;
        this.value = value;
    }
}
class GenericUnionFind {
    constructor() {
        this.nodes = new Map();
        this.class = 'GenericUnionFind';
    }
    makeSet(v) {
        if (this.nodes.has(v))
            return;
        this.nodes.set(v, new Node(v));
    }
    /**
     * 找出v的根节点
     */
    findNode(v) {
        let node = this.nodes.get(v);
        if (node == undefined)
            return undefined;
        // 一直找到父节点
        while (node.value !== node.parent.value) {
            node.parent = node.parent.parent;
            node = node.parent;
        }
        return node;
    }
    /**
     * 查找v所属的集合（根节点）
     *
     * @param v
     */
    find(v) {
        const node = this.findNode(v);
        return (node && node.value) || undefined;
    }
    ;
    /**
     * 合并v1、v2所在的集合
     * @param v1
     * @param v2
     */
    union(v1, v2) {
        const p1 = this.findNode(v1);
        const p2 = this.findNode(v2);
        if (p1 === undefined || p2 === undefined)
            return;
        if (p1.value === p2.value)
            return;
        // UnionFind_QU_R
        if (p1.rank < p2.rank) {
            p1.parent = p2;
        }
        else if (p1.rank > p2.rank) {
            p2.parent = p1;
        }
        else {
            p1.parent = p2;
            p2.rank += 1;
        }
    }
    ;
    /**
     * 检查v1、v2是否属于同一个集合
     * @param v1
     * @param v2
     */
    isSame(v1, v2) {
        return this.find(v1) === this.find(v2);
    }
}
exports.GenericUnionFind = GenericUnionFind;
