export class Asserts {
  static test(value: boolean) {
    try {
      if (!value) throw new Error('测试未通过');
    } catch (e) {
      console.log('e: ', e);
    }
  }
}

