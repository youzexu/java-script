type c = string | number

function fn(m: c) {
    (m as string).substring(1); // 类型断言，将m类型断言为string类型,只能欺骗ts编译器，实际运行时m可能是number类型

}
let student = {} as { name: string }
student.name = 'Tom'
fn(student.name) // 实际运行时student.name可能是number类型

let num:number = 10
console.log((num as any).lenght)

let a:any=5
console.log((a as number))

