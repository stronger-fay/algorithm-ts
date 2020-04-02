import { Integers, Times, Asserts } from '../tools';
import { UnionFind } from './UnionFind';
import { UnionFindQF } from './UnionFindQF';
import { UnionFindQU } from './UnionFindQU';
import { UnionFindQUS } from './UnionFindQUS';
import { UnionFindQUR } from './UnionFindQUR';
import { UnionFindQURPC } from './UnionFindQURPC';
import { UnionFindQURPH } from './UnionFindQURPH';
import { UnionFindQURPS } from './UnionFindQURPS';


const count = 500000;

// 测试正确性
// test(new UnionFindQF(count));
// test(new UnionFindQU(count));
// test(new UnionFindQUS(count));
test(new UnionFindQUR(count));
test(new UnionFindQURPC(count));
test(new UnionFindQURPH(count));
test(new UnionFindQURPS(count));

// 测试性能
// testTime(new UnionFindQF(count))
// testTime(new UnionFindQU(count))
// testTime(new UnionFindQUS(count))
testTime(new UnionFindQUR(count));
testTime(new UnionFindQURPC(count));
testTime(new UnionFindQURPH(count));
testTime(new UnionFindQURPS(count));

function test(uf: UnionFind) {
  uf.union(0, 1);
  uf.union(0, 3);
  uf.union(0, 4);
  uf.union(2, 3);
  uf.union(2, 5);

  uf.union(6, 7);

  uf.union(8, 10);
  uf.union(9, 10);
  uf.union(9, 11);

  Asserts.test(!uf.isSame(2, 7));

  uf.union(4, 6);

  Asserts.test(uf.isSame(2, 7));
}

function testTime(uf: UnionFind) {
  Times.test(uf.class, () => {
    for (let i = 0; i < count; i++) {
      uf.union(
        parseInt(`${Math.random() * count}`, 10),
        parseInt(`${Math.random() * count}`, 10),
      );
    }

    for (let i = 0; i < count; i++) {
      uf.isSame(
        parseInt(`${Math.random() * count}`, 10),
        parseInt(`${Math.random() * count}`, 10),
      );
    }
  })

}


