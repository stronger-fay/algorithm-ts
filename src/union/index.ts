import { Integers, Times, Asserts } from '../tools';
import { UnionFind } from './UnionFind';
import { UnionFindQF } from './UnionFindQF';
import { UnionFindQU } from './UnionFindQU';
import { UnionFindQUS } from './UnionFindQUS';
import { UnionFindQUR } from './UnionFindQUR';
import { UnionFindQURPC } from './UnionFindQURPC';
import { UnionFindQURPH } from './UnionFindQURPH';
import { UnionFindQURPS } from './UnionFindQURPS';

import { Student } from '../Student';
import { GenericUnionFind } from './GenericUnionFind';

const count = 500000;

// 测试正确性
// test(new UnionFindQF(count));
// test(new UnionFindQU(count));
// test(new UnionFindQUS(count));
test(new UnionFindQUR(count));
test(new UnionFindQURPC(count));
test(new UnionFindQURPH(count));
test(new UnionFindQURPS(count));
testGenericUnionFind();


// 测试性能
// testTime(new UnionFindQF(count))
// testTime(new UnionFindQU(count))
// testTime(new UnionFindQUS(count))
// testTime(new UnionFindQUR(count));
// testTime(new UnionFindQURPC(count));
// testTime(new UnionFindQURPH(count));
// testTime(new UnionFindQURPS(count));
testGenericUnionFindTime(new GenericUnionFind<number>());



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

function testGenericUnionFind() {
  const uf = new GenericUnionFind<Student>();
  const stu1 = new Student("jack", 1);
  const stu2 = new Student("rose", 2);
  const stu3 = new Student("jack", 3);
  const stu4 = new Student("rose", 4);

  uf.makeSet(stu1);
  uf.makeSet(stu2);
  uf.makeSet(stu3);
  uf.makeSet(stu4);

  uf.union(stu1, stu2);
  uf.union(stu3, stu4);

  // uf.union(stu1, stu4);

  Asserts.test(uf.isSame(stu1, stu2));
  Asserts.test(uf.isSame(stu3, stu4));
  Asserts.test(!uf.isSame(stu1, stu3));
  Asserts.test(!uf.isSame(stu1, stu4));
  Asserts.test(!uf.isSame(stu2, stu3));
  Asserts.test(!uf.isSame(stu2, stu4));
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

function testGenericUnionFindTime(uf: GenericUnionFind<number>): void {
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

  Asserts.test(!uf.isSame(2, 7));

  uf.union(4, 6);

  Asserts.test(uf.isSame(2, 7));

  Times.test(uf.class, () => {
    for (let i = 0; i < count; i++) {
      uf.union(
        parseInt(`${Math.random() * count}`, 10),
        parseInt(`${Math.random() * count}`, 10),
      );
    }

    for (let i = 0; i < count; i++) {
      uf.union(
        parseInt(`${Math.random() * count}`, 10),
        parseInt(`${Math.random() * count}`, 10),
      );
    }
  });
}


