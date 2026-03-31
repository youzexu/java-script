let a: number = 3.14;
let b: string = "hello world";
let c: boolean = true;
let d: any = 123;
let e: any[] = [1, "hello", true];
let f: undefined = undefined;
let g: null = null;
let aa: number = 123
let bb: unknown = 123
if (typeof (bb) == "number") {
    console.log(bb * 2)
} else if (typeof (bb) == "string") {
    bb.substring(1)
}