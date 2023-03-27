import { useEffect, useState } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { searchMovies } from "services/API";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([])

    const location = useLocation()
    const movieName = searchParams.get(("query")) ?? "";

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const queryValue = e.target[0].value;

        if (queryValue === ''){
                return setSearchParams({})
            }
            setSearchParams({query: queryValue})    
        }

    useEffect(()=>{
        if(movieName){
            searchMovies(movieName)
            .then(({data:{results}}) => setMovies(results))
            .catch(err => console.log(err))
        }
    },[searchParams])


    return <div>
        <form onSubmit={handleSubmit}>
        <input></input>
        <button>Search</button>
        </form>
    <ul>
    {movies.map(({title, id}) => {return <li key={id}>
        <Link to={`/movies/${id}`} state={{from: location}}>
        {title}
        </Link>
        </li>})}
    </ul>
    
    </div>
}

export default Movies