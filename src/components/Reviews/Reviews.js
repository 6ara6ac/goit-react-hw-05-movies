import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getReviews } from "services/API"
import { Spinner } from "../Other/Spinner"


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [status, setStatus] = useState('idle')
    const {id} = useParams()

    useEffect(() => {
        try{
            setStatus('pending')
            getReviews(id).then(({data:{results}}) => {
                if (results.length === 0) {
                    setStatus('reject')
                    throw new Error ("We don't have any reviews for this movie");
                }
                setReviews(results)
                setStatus('resolved')
            }
        )
        }
        catch(error){
            console.log(error)
        }
    },[id]) 




return <> 
{status === 'pending' && <Spinner/>}
{status === 'resolved' && reviews.map(({author, content, id})=>{
            return <div key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
                </div>
            })}
        {status === 'reject' && <p>We don't have any reviews for this movie</p>}
    </>
}


export default Reviews