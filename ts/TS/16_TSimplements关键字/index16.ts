interface Person {
    id: number
    name: string
    play: () => void
}

class Student implements Person {
    id: number
    name: string
    play: () => void
    constructor(a: number, b: string,c:()=>void) {
        this.id = a
        this.name = b
        this.play = c
    }
}