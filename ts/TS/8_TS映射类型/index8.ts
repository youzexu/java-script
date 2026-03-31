type User = { name: string, age: number, address: string }
type my = { [key in keyof User]: User[key] }
let ojb: my = { name: '张三', age: 20, address: '北京市' }

type My = "a" | "b" | "c"
type My1 = { readonly [key in My]?: number }

let obj1: My1 = { a: 1, b: 2, c: 3 }