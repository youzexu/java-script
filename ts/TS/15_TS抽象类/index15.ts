
//抽象方法只能出现在抽象类中，不能在普通类中定义
abstract class Animal {
    eat() {
        console.log('animal eat')
    }
    // abstract sleep()
}

//抽象类不能实例化，只能被继承,必须被子类实现
// class Dog extends Animal {
//     sleep() {
//         console.log('dog sleep')
//     }
// }