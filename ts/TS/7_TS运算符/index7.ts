// string   number  object  boolean  function   undefined   symbol

let a={name:"张三",age:20,sex:"男"}

type c= typeof a

let d:c={name:"李四",age:25,sex:"女"}

let e:typeof a={name:'zham',age:25,sex:'女'}

type person={name:string,age:number,sex:string}//name|age|sex
type Mytype=keyof person

let f:Mytype='age'