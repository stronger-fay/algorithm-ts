"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sort {
    // 构造函数 
    constructor() {
        this.name = 'Sort';
        this.array = [];
        this.cmpCount = 0;
        this.swapCount = 0;
        this.time = 0;
    }
    sort(array) {
        if (!array || array === null || array.length < 2)
            return;
        this.array = array;
        const begin = new Date().valueOf();
        this.reallySort();
        this.time = new Date().valueOf() - begin;
    }
    /**
       * 比较元素
       * <0 : 代表 array[index1] < array[index2]
       * ==0 : 代表 array[index1] == array[index2]
       * >0 : 代表 array[index1] > array[index2]
       */
    cmp(index1, index2) {
        this.cmpCount++;
        return this.array[index1].compareTo(this.array[index2]);
    }
    cmpElement(element1, element2) {
        this.cmpCount++;
        return element1.compareTo(element2);
    }
    /**
     * 交换元素
     */
    swap(index1, index2) {
        this.swapCount++;
        let tmp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = tmp;
    }
    /**
     * 转换单位
     */
    numberString(number) {
        if (number < 10000)
            return "" + number;
        if (number < 100000000)
            return (number / 10000.0) + "万";
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
exports.Sort = Sort;
