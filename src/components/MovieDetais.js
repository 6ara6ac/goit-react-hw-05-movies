import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMovieInfo } from "services/API"


const MovieDetais = () =>{
    const [info, setInfo] = useState([])
    const { id } = useParams()
    const location = useLocation()

    

    useEffect(()=> {
        getMovieInfo(id).then(({data}) => setInfo(data))
    },[id])
    

    const{title, vote_average, overview, poster_path, genres} = info;
    const genresList = genres?.map(({name}) => JSON.stringify(name)).join()


    return <div>
    <Link to={location.state?.from}>Назад к списку</Link>
    <div>
    <h3>{title}</h3>
    <img src={'https://image.tmdb.org/t/p/w500/'+poster_path} alt=''/>
    <p>{Math.fround(vote_average*10).toFixed(0)+ '%'}</p>
    <h4>{overview}</h4>
    <p>{genresList}</p>
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
    </div>
}

export default MovieDetais