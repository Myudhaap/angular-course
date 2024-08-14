import {getMovieDetailPromise, getMovieList, getMovieReviewPromise} from "./promise";

export interface Movie {
    movie: string
    year: number
    genre: string[]
}

async function fetchMovies(){
    try{
        const movies: string[] = await getMovieList()
        const movie: Movie = await getMovieDetailPromise(movies[0])
        await getMovieReviewPromise(movie)
    }catch (err){
        console.log(err)
    }
}

fetchMovies()

