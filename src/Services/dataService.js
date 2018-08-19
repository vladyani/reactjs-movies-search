import axios from 'axios'

const apiKey: string = 'fd39ebcc5c863f9a34541a1121ab1823'

export default {
  getMovies: (category: string) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
    return axios.get(url).then(info => info.data)
  },
  getMovieById: (movieId: number) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    return axios.get(url).then(info => info.data)
  },
  getMostVoted: () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1`
    return axios.get(url).then(info => info.data)
  }
}
