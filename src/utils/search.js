import { DURATION } from "./constants";

export function searchMoviesByDuration(movies) {
  return movies.filter((movie) => {
    return movie.duration <= DURATION
  })
}

export function searchMovies(keyValue, movies) {
  return movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyValue.toLowerCase())
  })
}
