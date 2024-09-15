const jsdom = require("jsdom");
// 把jsdom里的jsdom模块单独抽取出来，赋值为JSDOM，大括号是拆包
const { JSDOM } = jsdom;

//可以在这个模拟属性里附加各种参数值
const dom = new JSDOM('<!DOCTYPE html><p>hello world</p>',{
  url: "http://q.10jqka.com.cn/",
  referrer: "http://q.10jqka.com.cn/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});

//console.log(global)
//得到模拟的window所有的属性
console.log(dom.window)

//得到 hello world
console.log(dom.window.document.querySelector('p').textContent);