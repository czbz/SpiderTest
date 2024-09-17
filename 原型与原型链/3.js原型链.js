class Person{
    constructor(name) {
        this.name = name
    }
    drink(){
        console.log('喝水')
    }
}

class Teacher extends Person{
    constructor(name, subject) {
        super(name)
        this.subject = subject;
    }
    introduce(){
        console.log(`我是${this.name}, 教的${this.subject}`)
    }
}

var teacher = new Teacher('柏汌', 'python')
console.log(teacher)
teacher.introduce()
teacher.drink()