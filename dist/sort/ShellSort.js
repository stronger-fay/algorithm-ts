"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
/**
 * 希尔排序
 *
 * 1959年由唐纳德·希尔(Donald Shell)提出
 *
 * ◼希尔排序把序列看作是一个矩阵，分成 𝑚 列，逐列进行排序
 *  m 从某个整数逐渐减为1
 *  当 𝑚 为1时，整个序列将完全有序
 *
 * ◼因此，希尔排序也被称为递减增量排序(Diminishing Increment Sort)
 *
 * ◼矩阵的列数取决于步长序列(step sequence)
 *  ✓ 比如，如果步长序列为{1,5,19,41,109,...}，就代表依次分成109列、41列、19列、5列、1列进行排序
 *  ✓ 不同的步长序列，执行效率也不同
 *
 * ◼希尔本人给出的步长序列是 𝑛/2𝑘，比如 𝑛 为16时，步长序列是{1, 2, 4, 8}
 *
 * ◼从8列 变为 1列的过程中，逆序对的数量在逐渐减少
 * 因此希尔排序底层一般使用插入排序对每一列进行排序，也很多资料认为希尔排序是插入排序的改进版
 *
 *
 * ◼最好情况是步长序列只有1，且序列几乎有序，时间复杂度为 O(n)
 * ◼空间复杂度为O(1)，属于不稳定排序
 * ◼希尔本人给出的步长序列，最坏情况时间复杂度是 O(n2)
 * ◼目前已知的最好的步长序列，最坏情况时间复杂度是 O(n4/3) ，1986年由Robert Sedgewick提出

 * 执行流程(升序)
 *
 *
 */
class ShellSort extends Sort_1.Sort {
    constructor() {
        super();
        this.name = 'ShellSort';
    }
    reallySort() {
        const stepSequence = this.shellStepSequence();
        for (let index = 0; index < stepSequence.length; index++) {
            this.sortStep(stepSequence[index]);
        }
    }
    /**
       * 分成step列进行排序
       */
    sortStep(step) {
        // length: 32
        // stepSequence: {8 4 2 1}
        // col : 第几列，column的简称
        for (let col = 0; col < step; col++) { // 对第col列进行排序
            // col、col+step、col+2*step、col+3*step
            // 插入排序实现
            for (let begin = col + step; begin < this.array.length; begin += step) {
                let index = begin;
                while (index > col && this.cmp(index, index - step) < 0) {
                    this.swap(index, index - step);
                    index -= step;
                }
            }
        }
        // 插入排序
        // for (let begin = 1; begin < this.array.length; begin++) {
        //   let index = begin;
        //   while (index > 0 && this.cmp(index, index - 1) < 0) {
        //     this.swap(index, index - 1);
        //     index--;
        //   }
        // }
    }
    shellStepSequence() {
        const stepSequence = [];
        let length = this.array.length;
        while (length >>= 1) {
            stepSequence.push(length);
        }
        return stepSequence;
    }
}
exports.ShellSort = ShellSort;
