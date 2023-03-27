import axios from "axios"

const API_KEY='1aec7afb2309fd39902ffda599461df1'

export const getPopularMovies = async () => {
   const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    return data;
}

export const getMovieInfo = async (id) => {
  return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
}

export const searchMovies = async (query) =>{
  return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false
  `)
}

export const getCredits = async (id) =>{
  return await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US
  `)
}

export const getReviews = async (id) =>{
  return await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US
  `)
}