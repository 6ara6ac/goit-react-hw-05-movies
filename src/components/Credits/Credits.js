import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getCredits } from "services/API"
import { POSTER_URL, FAKE_ACTOR } from "static/Base_url"
import { Spinner } from "../Other/Spinner"
import { CreditsContainer } from "./Credits.styled"

const Credits = () => {
const [cast, setCast] = useState([])
const [status, setStatus] = useState('idle')
const {id} = useParams()


useEffect(() => {
    try {
        setStatus('pending')
        getCredits(id).then(({data:{cast}}) => {
            if (cast.length === 0) {
                setStatus('reject')
                throw new Error ("We don't have any cast for this movie");
            }
            setCast(cast)
            setStatus('resolved')
        })
    }
    catch (error){
        console.log(error);
    }
},[id]) 

    return <CreditsContainer>
        {status === 'pending' && <Spinner/>}
        {status ==='reject' && <p>We don't have any cast for this movie</p>}
        {status === 'resolved' && cast.map(({id, name, profile_path, character})=>{
            return <div key={id}>
                <img src={
                profile_path === null || undefined 
                ? FAKE_ACTOR :
                POSTER_URL + profile_path} alt={name} width={200} height={300}></img>
                <p>{name}</p>
                <p>character: {character}</p>
                </div>
            })}
    </CreditsContainer>
}

export default Credits