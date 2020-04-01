"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinarySearch {
    /**
     * 查找v在有序数组array中的位置
     * @param array
     * @param v
     */
    static indexOf(array, v) {
        if (array.length === 0)
            return -1;
        // 左开右闭 [ )
        let begin = 0;
        let end = array.length;
        while (begin < end) {
            const mid = Math.floor((begin + end) / 2);
            if (v < array[mid]) {
                end = mid;
            }
            else if (v > array[mid]) {
                begin = mid + 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }
    /**
     * 查找v在有序数组array中待插入位置
     * @param array
     * @param v
     */
    static search(array, v) {
        if (array.length === 0)
            return -1;
        let begin = 0;
        let end = array.length;
        while (begin < end) {
            const mid = Math.floor((begin + end) / 2);
            if (v < array[mid]) {
                end = mid;
            }
            else {
                begin = mid + 1;
            }
        }
        return begin;
    }
}
exports.BinarySearch = BinarySearch;
