import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'



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

MoviesItem.propTypes = {
    movies: PropTypes.arrayOf(
       PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number
       }
       )
    )
}

export default MoviesItem