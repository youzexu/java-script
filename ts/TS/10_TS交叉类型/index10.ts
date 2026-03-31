type A = { a: number, b: string }
type B = { d: number, c: boolean }
interface e {weight: number}

// 交叉类型
type C = A & B & { e: string }& e;
let obj: C = { a: 1, b: "2", c: true, d: 3, e: '1', weight: 100 }