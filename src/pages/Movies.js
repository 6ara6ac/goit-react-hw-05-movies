import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    // const productName = searchParams.get(("name")) ?? "";

    useEffect(()=>{
        setSearchParams(query !== "" ? { query } : {})
    },[query])


    const handleInput = value =>{
        setQuery(value)
    }

    return <>
    <input onChange={e => handleInput(e.target.value)}></input>
    <button>Search</button></>
}

export default Movies