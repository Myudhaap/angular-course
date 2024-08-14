export interface Movie {
    movie: string
    year: number
    genre: string[]
}

export function getMovieList(): Promise<string[]>{
    return new Promise<string[]>((resolve, reject) => {
        console.log("Mendapatkan data dari API")
        setTimeout(() => {
            try{
                const res = [
                    "Laskar Pelangi",
                    "KKN Desa Penari"
                ]

                resolve(res)
            }catch(e){
                reject(e)
            }
        }, 3000)
    })
}

export function getMovieDetailPromise(movieName: string): Promise<Movie> {
    return new Promise<Movie>((resolve, reject) => {
        console.log("Mendapatkan data detail movie: " + movieName)
        setTimeout(() => {
            const res: Movie = {
                movie: movieName,
                year: 2024,
                genre: ["Action", "Sci-fi"]
            }

            resolve(res)
        }, 1000)
    })
}

export function getMovieReviewPromise(movie: Movie): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        console.log("Mendapatkan review movie: " + movie)
        setTimeout(() => {
            const res = ["Bagus", "Good"]
            resolve(res)
        }, 1000)
    })
}

getMovieList()
    .then((movies: string[]): Promise<Movie> => {
        console.log(movies)
        return getMovieDetailPromise(movies[0])
    })
    .then((movie: Movie): Promise<string[]> => {
        console.log(movie)
        return getMovieReviewPromise(movie)
    })
    .then((review: string[]): void => {
        console.log(review)
    })
    .catch((err): void => {
        console.log(err)
    })