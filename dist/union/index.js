"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const UnionFindQUR_1 = require("./UnionFindQUR");
const UnionFindQURPC_1 = require("./UnionFindQURPC");
const UnionFindQURPH_1 = require("./UnionFindQURPH");
const UnionFindQURPS_1 = require("./UnionFindQURPS");
const count = 500000;
// 测试正确性
// test(new UnionFindQF(count));
// test(new UnionFindQU(count));
// test(new UnionFindQUS(count));
test(new UnionFindQUR_1.UnionFindQUR(count));
test(new UnionFindQURPC_1.UnionFindQURPC(count));
test(new UnionFindQURPH_1.UnionFindQURPH(count));
test(new UnionFindQURPS_1.UnionFindQURPS(count));
// 测试性能
// testTime(new UnionFindQF(count))
// testTime(new UnionFindQU(count))
// testTime(new UnionFindQUS(count))
testTime(new UnionFindQUR_1.UnionFindQUR(count));
testTime(new UnionFindQURPC_1.UnionFindQURPC(count));
testTime(new UnionFindQURPH_1.UnionFindQURPH(count));
testTime(new UnionFindQURPS_1.UnionFindQURPS(count));
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
