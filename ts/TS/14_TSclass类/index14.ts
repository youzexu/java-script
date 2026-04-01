class person {
    //实例属性
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    //加了static关键字的才是类属性,只能通过类来访问
    static count: number = 0
    //实例方法
    art() {
        console.log('画画')
    }
}
let xm = new person('张三', 0)
person.count = 10
xm.art()

class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log('吃东西')
    }
    sleep() {
        console.log('睡觉')
    }
}
class Dog extends Animal {
    sex: number
    constructor(name: string, age: number, sex: number) {
        super(name, age)
        this.sex = sex
    }
    //方法的重写
    eat() {
        console.log('狗狗吃骨头')
    }

}
let wc = new Dog('小狗', 2, 1)
wc.age = 3
wc.eat()

//属性前加 private 关键字,只能在类内部访问
class Animal2 {
    private name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log('吃东西')
    }
    sleep() {
        console.log('睡觉')
    }
}
let dog1 = new Animal('wangcai', 2)
console.log(dog1.name) //报错,只能在类内部访


//protected 关键字,只能在类内部和子类中访问
class Animal3 {
    protected name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log('吃东西')
    }
}
class Dog3 extends Animal3 {
    constructor() {
        super("a",8)
        super.eat()
    }
}