export class Times {
  static dateFormat(fmt: string, date: Date): string {
    let ret;
    const opt: { [key: string]: string; } = {
      "Y+": date.getFullYear().toString(),        // 年
      "M+": (date.getMonth() + 1).toString(),     // 月
      "D+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "m+": date.getMinutes().toString(),         // 分
      "s+": date.getSeconds().toString(),         // 秒
      "S+": date.getMilliseconds().toString(),    // 毫秒

      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  }

  static test(title: string, fn = () => { }): void {
    if (!fn) return;
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