"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Times {
    static dateFormat(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),
            "M+": (date.getMonth() + 1).toString(),
            "D+": date.getDate().toString(),
            "H+": date.getHours().toString(),
            "m+": date.getMinutes().toString(),
            "s+": date.getSeconds().toString(),
            "S+": date.getMilliseconds().toString(),
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
            }
            ;
        }
        ;
        return fmt;
    }
    static test(title, fn = () => { }) {
        if (!fn)
            return;
        title = ("【" + title + "】");
        console.log(title);
        console.log("开始：" + this.dateFormat('HH:mm:ss.SSS', new Date()));
        const begin = (new Date()).valueOf();
        fn();
        const end = (new Date()).valueOf();
        console.log("结束：" + this.dateFormat('HH:mm:ss.SSS', new Date()));
        const delta = (end - begin) / 1000.0;
        console.log(`耗时：${delta}秒（${end - begin}毫秒）`);
        console.log("-------------------------------------");
    }
}
exports.Times = Times;
