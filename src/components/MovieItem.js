import { Link } from "react-router-dom"

const MoviesItem = ({movies}) => {
    
    return <ul>
        {movies.map(({title, id, name}) => {
           return <li key={id}>
            <Link to={`/movies/${id}`}>
            {title}
            </Link>
            </li>
        })}
    </ul>
}

export default MoviesItem