interface Person { name: string, address: string, age: number }
// 定义一个接口，表示一个人，包含姓名、地址、年龄属性，extend Person接口继承
interface man extends Person, pro {
    hobby: string
}
let p: man = {
    name: "张三",
    age: 25,
    address: "北京市朝阳区",
    hobby: "打篮球",
    phon: '华为',
    email: '111'
}
interface pro {
    phon: string,
    email: string
}
interface fn {
    (a: number): number
}
let f: fn = function (a: number) {
    return a + 1
}