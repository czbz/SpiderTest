// node环境执行
var navigator = {
    userAgent:"aaaaa"
}
console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));

console.log('---------------------------------------');

//补隐式原型
navigator = {}
//navigator.__proto__就是类的原型，即对象的隐式原型
navigator.__proto__.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'

console.log(navigator.userAgent);
console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));
console.log(navigator.__proto__);

console.log('---------------------------------------');


//补显式原型，创建出要补的对象的类
var Navigator = function() {};
Navigator.prototype = {"userAgent": "123123123"};
navigator = new Navigator();
console.log(navigator.userAgent)
console.log(Object.getOwnPropertyDescriptor(navigator, 'userAgent'));


console.log('---------------------------------------');

//补方法
// 首先createElement方法在document前两级的对象当中
//Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement')

//document.createElement是补方法的对象
//document ->HTMLDocument ->Document

Document = function Document(){}
// Object.defineProperty 给对象定义一个新属性，或修改其现有属性，并返回此对象。
//此处修改对象的prototype显式原型，创建createElement方法，第三个属性是直接拿网页上的
Object.defineProperty(Document.prototype,'createElement',{
    configurable: true,
    enumerable: true,
    value: function createElement(){},
    writable: true,
})


HTMLDocument = function HTMLDocument(){}
//可以将一个指定对象的原型（即内部的隐式原型属性）设置为另一个对象的原型
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
document = new HTMLDocument()

console.log(Object.getOwnPropertyDescriptor(document.__proto__.__proto__, 'createElement'));



console.log('---------------------------------------');

//tostring检测

