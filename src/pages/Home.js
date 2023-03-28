import { getPopularMovies } from "services/API"
import { useState,useEffect } from "react" 
import MoviesItem from "components/MovieItem/MovieItem"


const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> { getPopularMovies().then(({ results }) => {
        setMovies(results)
    })},[])




    return <div>
        <h2>Trending today</h2>
        {movies && <MoviesItem movies={movies}/>}
    </div>
    

}

export default Home