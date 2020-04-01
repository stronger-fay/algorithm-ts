
interface Comparable<T> {
  compareTo: (element: T) => number
}

export abstract class Sort<T extends Comparable<T>> {
  protected name: string;
  protected array: Array<T>;
  private cmpCount: number;
  private swapCount: number;
  private time: number;

  // 构造函数 
  constructor() {
    this.name = 'Sort';
    this.array = [];
    this.cmpCount = 0;
    this.swapCount = 0;
    this.time = 0;
  }

  sort(array: T[]) {
    if (!array || array === null || array.length < 2) return;

    this.array = array;

    const begin = new Date().valueOf();
    this.reallySort();
    this.time = new Date().valueOf() - begin;
  }

  public abstract reallySort(): void;

  /**
     * 比较元素
     * <0 : 代表 array[index1] < array[index2]
     * ==0 : 代表 array[index1] == array[index2]
     * >0 : 代表 array[index1] > array[index2]
     */
  cmp(index1: number, index2: number): number {
    this.cmpCount++;

    return this.array[index1].compareTo(this.array[index2]);
  }

  cmpElement(element1: T, element2: T): number {
    this.cmpCount++;

    return element1.compareTo(element2);
  }

  /**
   * 交换元素
   */
  swap(index1: number, index2: number) {
    this.swapCount++;

    let tmp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = tmp;
  }

  /**
   * 转换单位
   */
  numberString(number: number) {
    if (number < 10000) return "" + number;

    if (number < 100000000) return (number / 10000.0) + "万";

    return (number / 100000000.0) + "亿";
  }


  toString() {
    const timeStr = "耗时：" + (this.time / 1000.0) + "s(" + this.time + "ms)";
    const compareCountStr = "比较：" + this.numberString(this.cmpCount);
    const swapCountStr = "交换：" + this.numberString(this.swapCount);
    // const stableStr = "稳定性：" + isStable();
    return "【" + this.name + "】\n"
      // + stableStr + " \t"
      + timeStr + " \t"
      + compareCountStr + "\t "
      + swapCountStr + "\n"
      // + this.array + "\n"
      + "------------------------------------------------------------------";
  }


}