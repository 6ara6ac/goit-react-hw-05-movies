import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getCredits } from "services/API"

const Credits = () => {
const [cast, setCast] = useState([])
const {id} = useParams()

console.log(cast)

useEffect(() => {
    getCredits(id).then(({data:{cast}}) => {setCast(cast)})
},[id]) 

    return <>
        {cast.map(({id, name, profile_path, character})=>{
            return <div key={id}>
                <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name}></img>
                <p>{name}</p>
                <p>character:{character}</p>
                </div>
            })}
    </>
}

export default Credits