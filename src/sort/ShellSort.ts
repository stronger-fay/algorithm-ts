import { Sort } from './Sort';

/**
 * 希尔排序
 * 执行流程(升序)
 *  
 */

export class ShellSort extends Sort {
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
  private sortStep(step: number) {
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

  private shellStepSequence() {
    const stepSequence = [];
    let length = this.array.length;
    while (length >>= 1) {
      stepSequence.push(length);
    }
    return stepSequence;
  }
}

