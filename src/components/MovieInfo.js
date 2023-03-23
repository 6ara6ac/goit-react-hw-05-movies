import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieInfo } from "services/API"


const MovieDetais = () =>{
    const [info, setInfo] = useState([])
    const {id} = useParams()

    console.log(id)

    useEffect(()=> {
        getMovieInfo(id).then(({data}) => setInfo(data))
    },[id])
    

    const{title, vote_average, overview, poster_path, genres} = info;
    const genresList = genres.map(({name}) => {return JSON.stringify(name)}).join()

    return <div>
    <img src={'https://image.tmdb.org/t/p/w500/'+poster_path} alt=''/>
    <h3>{title}</h3>
    <p>{vote_average}</p>
    <h4>{overview}</h4>
    <p>{genresList}</p>
    </div>
}

export default MovieDetais