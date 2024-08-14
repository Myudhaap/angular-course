// Timeout
console.log("Start")
setTimeout(() => {
    console.log("Task")
}, 2000)
console.log("Finish")

// Async Await
function getMovies(): string[] {
    let movies: string[] = []
    console.log("Mendapatkan data dari API")
    setTimeout(() => {
        movies.push("Laskar Pelangi")
        movies.push("KKN Desa Penari")
        console.log({movies})
    }, 3000)
    return movies
}

console.log("Start")
console.log(getMovies())
console.log("Finish")