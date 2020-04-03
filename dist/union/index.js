"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const UnionFindQUR_1 = require("./UnionFindQUR");
const UnionFindQURPC_1 = require("./UnionFindQURPC");
const UnionFindQURPH_1 = require("./UnionFindQURPH");
const UnionFindQURPS_1 = require("./UnionFindQURPS");
const Student_1 = require("../Student");
const GenericUnionFind_1 = require("./GenericUnionFind");
const count = 500000;
// 测试正确性
// test(new UnionFindQF(count));
// test(new UnionFindQU(count));
// test(new UnionFindQUS(count));
test(new UnionFindQUR_1.UnionFindQUR(count));
test(new UnionFindQURPC_1.UnionFindQURPC(count));
test(new UnionFindQURPH_1.UnionFindQURPH(count));
test(new UnionFindQURPS_1.UnionFindQURPS(count));
testGenericUnionFind();
// 测试性能
// testTime(new UnionFindQF(count))
// testTime(new UnionFindQU(count))
// testTime(new UnionFindQUS(count))
// testTime(new UnionFindQUR(count));
// testTime(new UnionFindQURPC(count));
// testTime(new UnionFindQURPH(count));
// testTime(new UnionFindQURPS(count));
testGenericUnionFindTime(new GenericUnionFind_1.GenericUnionFind());
function test(uf) {
    uf.union(0, 1);
    uf.union(0, 3);
    uf.union(0, 4);
    uf.union(2, 3);
    uf.union(2, 5);
    uf.union(6, 7);
    uf.union(8, 10);
    uf.union(9, 10);
    uf.union(9, 11);
    tools_1.Asserts.test(!uf.isSame(2, 7));
    uf.union(4, 6);
    tools_1.Asserts.test(uf.isSame(2, 7));
}
function testGenericUnionFind() {
    const uf = new GenericUnionFind_1.GenericUnionFind();
    const stu1 = new Student_1.Student("jack", 1);
    const stu2 = new Student_1.Student("rose", 2);
    const stu3 = new Student_1.Student("jack", 3);
    const stu4 = new Student_1.Student("rose", 4);
    uf.makeSet(stu1);
    uf.makeSet(stu2);
    uf.makeSet(stu3);
    uf.makeSet(stu4);
    uf.union(stu1, stu2);
    uf.union(stu3, stu4);
    // uf.union(stu1, stu4);
    tools_1.Asserts.test(uf.isSame(stu1, stu2));
    tools_1.Asserts.test(uf.isSame(stu3, stu4));
    tools_1.Asserts.test(!uf.isSame(stu1, stu3));
    tools_1.Asserts.test(!uf.isSame(stu1, stu4));
    tools_1.Asserts.test(!uf.isSame(stu2, stu3));
    tools_1.Asserts.test(!uf.isSame(stu2, stu4));
}
function testTime(uf) {
    tools_1.Times.test(uf.class, () => {
        for (let i = 0; i < count; i++) {
            uf.union(parseInt(`${Math.random() * count}`, 10), parseInt(`${Math.random() * count}`, 10));
        }
        for (let i = 0; i < count; i++) {
            uf.isSame(parseInt(`${Math.random() * count}`, 10), parseInt(`${Math.random() * count}`, 10));
        }
    });
}
function testGenericUnionFindTime(uf) {
    for (let i = 0; i < count; i++) {
        uf.makeSet(i);
    }
    uf.union(0, 1);
    uf.union(0, 3);
    uf.union(0, 4);
    uf.union(2, 3);
    uf.union(2, 5);
    uf.union(6, 7);
    uf.union(8, 10);
    uf.union(9, 10);
    uf.union(9, 11);
    tools_1.Asserts.test(!uf.isSame(2, 7));
    uf.union(4, 6);
    tools_1.Asserts.test(uf.isSame(2, 7));
    tools_1.Times.test(uf.class, () => {
        for (let i = 0; i < count; i++) {
            uf.union(parseInt(`${Math.random() * count}`, 10), parseInt(`${Math.random() * count}`, 10));
        }
        for (let i = 0; i < count; i++) {
            uf.union(parseInt(`${Math.random() * count}`, 10), parseInt(`${Math.random() * count}`, 10));
        }
    });
}
