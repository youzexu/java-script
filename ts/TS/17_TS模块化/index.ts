import type { Person, Student } from "./index17";
let xm: Person = { name: "xm", age: 25 }
let xf: Student = { grade: 3, hobby: ["reading", "swimming"] }
//export* from "./index17";重导出所有作用：当你的文件中需要用到多个模块中的类型时，可以用export*来重导出所有类型，这样就可以在其他文件中使用import type { Person, Student } from "./index17";来导入所有类型。