let a: { name: string, age: number } = { name: '张三', age: 18 }
let b: { name?: string, age?: number } = {}
let c: { name: string, [propName: string]: string } = { name: '张三', age: '8', height: '175', weight: '60' }

//前面加readonly可以使属性只能在创建时赋值，不能修改
let obj: {
    name: string,
    like: string[],
    pet: {
        name: string,
        age: number
    }
    [propName: string]: any
}
obj = {
    name: "张三",
    like: ["篮球", "足球", "乒乓球"],
    pet: { name: "小白", age: 1 },
    grifrend: { name: "李四", age: 2 }
}