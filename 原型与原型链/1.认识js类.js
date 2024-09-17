//创建一个类
class Person{
    constructor(name) {
        this.name = name
    }
    //创建一个方法
    dance(){
        console.log('跳舞')
    }
}


class Student extends Person{
    constructor(name, score) {
        //调用父类的构造器，使得子类可以继承父类的属性。之后子类构造器可以继续执行
        super(name)
        this.score = score;
    }
    introduce(){
        console.log(`我是${this.name}, 考了${this.score}`)
    }
}



var student = new Student('张三', 10)

//此处打印的是类本身，属性是一个类，而不是其中具体的参数
//并且打印出来只有对象的属性，没有对象的方法，这是为什么？
console.log(student)

//调用student类的方法
student.introduce()
//调用student父类的方法
student.dance()