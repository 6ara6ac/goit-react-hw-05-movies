import { Spinner } from "components/Other/Spinner";
import { useEffect, useState } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { searchMovies } from "services/API";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = useState('idle')
    const [movies, setMovies] = useState([])

    const location = useLocation()

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const queryValue = e.target[0].value;
        if (queryValue === ''){
                return setSearchParams({})
            }
            setSearchParams({query: queryValue})
            setStatus('pending') 
        }

    useEffect(()=>{
        const movieName = searchParams.get(("query")) ?? "";

        if(movieName){
            searchMovies(movieName)
            .then(({data:{results}}) => {
                if (results.length === 0){
                setStatus('reject')
                throw new Error ("We don't have any cast for this movie");
                }
                setMovies(results)
                setStatus('resolved')
                
            })
            .catch(err => console.log(err))
        }
    },[searchParams])


    return <div>
        <form onSubmit={handleSubmit}>
        <input></input>
        <button>Search</button>
        </form>
    <ul>
    {status === 'pending' && <Spinner/>}
    {status === 'reject' && <p>We don't have any movies for this query</p>}
    {status === 'resolved' && movies.map(({title, id}) => {return <li key={id}>
        <Link to={`/movies/${id}`} state={{from: location}}>
        {title}
        </Link>
        </li>})}
    </ul>
    
    </div>
}

export default Movies