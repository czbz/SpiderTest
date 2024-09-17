class Student{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    introduce(){
        console.log(`我是${this.name}, 考了${this.score}`)
    }
}

var student = new Student('张三', 10)
console.log(student)
student.introduce()