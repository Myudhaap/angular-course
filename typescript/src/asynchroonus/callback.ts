interface Movie {
    movie: string
    year: number
    genre: string[]
}

function getMovieList(cb: (movies: string[]) => void): string[] {
    let movies: string[] = []
    console.log("Mendapatkan data dari API")
    setTimeout(() => {
        const res: string[] = ["Laskar Pelangi", "KKN Desa Penari"]
        movies = res
        cb(movies)
    }, 1000)
    return movies
}

function getMovieDetail(name: string, cb: (movie: Movie) => void): void {
    console.log("Mendapatkan etail movie " + name)
    setTimeout(() => {
        const movie: Movie = {
            movie: name,
            year: 2024,
            genre: ["Action", "Drama"]
        }

        cb(movie)
    }, 1000)
}

function getMovieReview(movie: Movie, cb: (review: string[]) => void): void {
    console.log("Mendapatkan review movie " + movie)
    setTimeout(() => {
        const review = [
            "Bagus", "Good"
        ]

        cb(review)
    }, 1000)
}

console.log("Start")
console.log(getMovieList((movies) => {
    console.log({movies})
    getMovieDetail(movies[0], (movie) => {
        console.log({movie})
        getMovieReview(movie, (review) => {
            console.log(review)
        })
    })
}))
console.log("Finish")