import { Link, useLocation } from "react-router-dom"


const MoviesItem = ({movies}) => {
    const location = useLocation()

    
    return <ul>
        {movies.map(({title, id}) => {
           return <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>
            {title}
            </Link>
            </li>
        })}
    </ul>
}

export default MoviesItem