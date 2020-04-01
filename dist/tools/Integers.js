"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Integers {
    static random(count, min, max) {
        if (count <= 0 || min > max)
            return [];
        const array = new Array(count);
        const delta = max - min + 1;
        for (let i = 0; i < count; i++) {
            array[i] = min + parseInt(`${Math.random() * delta}`);
        }
        return array;
    }
    static combine(array1, array2) {
        if (array1 == undefined || array2 == undefined)
            return [];
        const array = new Array(array1.length + array2.length);
        for (let i = 0; i < array1.length; i++) {
            array[i] = array1[i];
        }
        for (let i = 0; i < array2.length; i++) {
            array[i + array1.length] = array2[i];
        }
        return array;
    }
    static same(count, unsameCount) {
        if (count <= 0 || unsameCount > count)
            return [];
        const array = new Array(count);
        for (let i = 0; i < unsameCount; i++) {
            array[i] = unsameCount - i;
        }
        for (let i = unsameCount; i < count; i++) {
            array[i] = unsameCount + 1;
        }
        return array;
    }
    static headTailAscOrder(min, max, disorderCount) {
        const array = this.ascOrder(min, max);
        if (disorderCount > array.length)
            return array;
        const begin = (array.length - disorderCount) >> 1;
        this.reverse(array, begin, begin + disorderCount);
        return array;
    }
    static centerAscOrder(min, max, disorderCount) {
        const array = this.ascOrder(min, max);
        if (disorderCount > array.length)
            return array;
        const left = disorderCount >> 1;
        this.reverse(array, 0, left);
        const right = disorderCount - left;
        this.reverse(array, array.length - right, array.length);
        return array;
    }
    static headAscOrder(min, max, disorderCount) {
        const array = this.ascOrder(min, max);
        if (disorderCount > array.length)
            return array;
        this.reverse(array, array.length - disorderCount, array.length);
        return array;
    }
    static tailAscOrder(min, max, disorderCount) {
        const array = this.ascOrder(min, max);
        if (disorderCount > array.length)
            return array;
        this.reverse(array, 0, disorderCount);
        return array;
    }
    static ascOrder(min, max) {
        if (min > max)
            return [];
        const array = new Array(max - min + 1);
        for (let i = 0; i < array.length; i++) {
            array[i] = min++;
        }
        return array;
    }
    static descOrder(min, max) {
        if (min > max)
            return [];
        const array = new Array(max - min + 1);
        for (let i = 0; i < array.length; i++) {
            array[i] = max--;
        }
        return array;
    }
    /**
       * 反转一个数组，索引范围是[begin, end)
       */
    static reverse(array, begin, end) {
        const count = (end - begin) >> 1;
        const sum = begin + end - 1;
        for (let i = begin; i < begin + count; i++) {
            const j = sum - i;
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    static copy(array) {
        return [...array];
    }
    static isAscOrder(array) {
        if (array == null || array.length == 0)
            return false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i])
                return false;
        }
        return true;
    }
    static println(array = []) {
        if (array == null)
            return;
        let string = '';
        for (let i = 0; i < array.length; i++) {
            if (i != 0)
                string += "_";
            string += array[i];
        }
        console.log(string);
    }
}
exports.Integers = Integers;
