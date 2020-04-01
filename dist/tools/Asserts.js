"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asserts {
    static test(value) {
        try {
            if (!value)
                throw new Error('测试未通过');
        }
        catch (e) {
            console.log('e: ', e);
        }
    }
}
exports.Asserts = Asserts;
