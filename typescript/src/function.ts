function greeting(name: string, address: string): string
{
    return `Hai, saya ${name} saat ini tinggal di ${address}`
}

console.log(greeting("John Doe", "Indonesia"))

const acceptAnything = (anything: string | number | boolean | number[]):void => {
    console.log(anything)
}

acceptAnything(2024)
acceptAnything("2024")
acceptAnything(true)
acceptAnything([1,2,3,4,5])