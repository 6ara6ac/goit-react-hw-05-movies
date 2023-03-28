import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMovieInfo } from "services/API"
import { FAKE_POSTER, POSTER_URL } from "static/Base_url"
import { MovieContainer, MovieInfoContainer, BackLink } from './MovieDetails.styled'


const MovieDetais = () =>{
    const [info, setInfo] = useState([])
    const { id } = useParams()

    const location = useLocation()

    

    useEffect(()=> {
        getMovieInfo(id).then(({data}) => setInfo(data))
    },[id])
    

    const{title, vote_average, overview, poster_path, genres, release_date} = info;
    const genresList = genres?.map(({name}) => JSON.stringify(name)).join()


    return <MovieContainer>
    <BackLink to={location.state?.from || '/movies'}>back to list</BackLink>
    <div>
    <MovieInfoContainer>
    <img src={
        poster_path === null || undefined 
        ? FAKE_POSTER : 
        POSTER_URL + poster_path} alt='' width={500}/>
    <div>
    <h3>{title} <span>({release_date?.slice(0, 4)})</span></h3>
    <p>User score: {Math.fround(vote_average*10).toFixed(0)+ '%'}</p>
    <h4>Overview</h4>
    <p>{overview}</p>
    <h4>Genres</h4>
    <p>{genresList}</p>
    </div>
    </MovieInfoContainer>
    </div>
    <div>
    <h4>Additional info</h4>
    <ul>
    <li>
    <Link to="cast">Cast</Link>
    </li>
    <li>
    <Link to="reviews">Reviews</Link>
    </li>
    </ul>
    <Outlet/>
    </div>
    </MovieContainer>
}

export default MovieDetais