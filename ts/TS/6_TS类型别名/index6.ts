type myobj = { name: string, age: number, hoby: string[], run: () => void }
let obj: myobj = { name: 'zhangsan', age: 20, hoby: ['reading', 'swimming'], run: function () { console.log('running') } }


let obj2: { name: string, age: number }[] = [
    { name: 'lisi', age: 25 },
    { name: 'lisi', age: 25 }
]
type person = { name: string, age: number }[]

let obj3: person[] = [
    [{ name: "张三", age: 12 }],
    [{ name: "张三", age: 12 }]
]
let obj4: { id: string, title: string, done: boolean }[] = [
    { id: '001', title: '吃饭', done: false },
    { id: '001', title: '吃饭', done: false },
    { id: '001', title: '吃饭', done: false }
]
type todo = { id: string, title: string, done: boolean }[]

let obj5: todo = [
    { id: '001', title: '吃饭', done: false },
    { id: '001', title: '吃饭', done: false },
    { id: '001', title: '吃饭', done: false }
]
let a=1
let b;
b=2
b="1"
b=false