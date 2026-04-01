//namespace只能在该命名空间内使用，不能在外部使用
namespace Utils {
    export function fn() {
        console.log("hello world");
    }
    export var a = 1
}
Utils.fn()
console.log(Utils.a)