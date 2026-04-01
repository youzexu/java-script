function fn<T>(a: T) {
    return a
}
// String  number  boolean  undefined  null  symbol  {name: string, age: number} [] ()=>void  interface   type  值类型 
fn<string>('hello')


fn('123')

function fn1<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2)
}
fn1<number | string>([1, 2, 3], ['1', '2', '3'])


function fn2<T, U>(arr1: T, arr2: U): T {
    return arr1
}
fn2<number, string>(4, 'hello')

//接口中使用泛型
interface person<T, U> {
    name: T
    age: U
}

let p1: person<string, number> = {
    name: 'Tom',
    age: 20
}
//class
class Animal<T> {
    name: T
    age: number
    constructor(name: T, age: number) {
        this.name = name
        this.age = age
    }
}
new Animal<string>('dog', 3)

//Array是一个数组的内置接口
let a1: Array<number> = [1, 2, 3]

//类型别名
type a2<T> = { value: T }
let obj: a2<number> = { value: 1 }
//复杂类型别名
function fn3<T, U>(arr3: T[], f: (arg: T) => U): U[] {
    return arr3.map(f)
}
fn3<string, number>(['2', '2', '3'], (item) => parseInt(item))
//默认类型推断
class person1<T = string> {
    list: T[] = []
    add(t: T) {
        this.list.push(t)
    }
}
let p2 = new person1()
p2.add('Tom')
// 默认失效
// p2.add(20)

// 泛型约束extends用于约束T的类型大类型包含后面的内型T>=
function fn4<T extends string>(arg: T): T {
    console.log(arg.length)
    return arg
}

let result = { a: 1, b: 2, c: 3 }
function fn5<T extends keyof U, U>(a: T, b: U) {

}
fn5('a', result)

//泛型嵌套
interface Box<T> {
    iteam: T
}
let obj1: Box<Box<string>> = {
    iteam: {
        iteam: 'hello'
    }
}