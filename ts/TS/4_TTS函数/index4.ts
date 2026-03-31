let fn: (m: string, n: number) => void = function (m: string, n: number): void { }


function fn1(m: string, n: number): void {
    console.log(m + n)
}
function fn2(m: string, n?: number): void {
    console.log(m + n)
}
function fn3(a: number, ...rest: [string, number]) { }
fn3(1, "a", 2)

let obj: {
    run:(height: number)=>void
}
obj = {
    run: function (height: number): void {
        console.log("i can run")
    }
}