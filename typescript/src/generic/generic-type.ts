function identity<T>(arg: T): T {
    return arg
}

const identityArrow = <T>(arg: T): T => arg

const address = identity<string>("Malang")
console.log({address})

const myGpa: number = identity<number>(3.81)
console.log({myGpa})