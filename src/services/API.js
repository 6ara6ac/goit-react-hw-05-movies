import axios from "axios"

const API_KEY='1aec7afb2309fd39902ffda599461df1'


export const getPopularMovies = async () => {
   const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    return data;
}

export const getMovieInfo = async (id) => {
  const movieInfo = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  return movieInfo
}