import { useEffect, useState } from "react";

function useFetchData(url){
    const [result,setResult] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);


    useEffect(()=>{
        (async () => {
            try{
                console.log(url);
                const res = await fetch(url);
                const json = await res.json();
                setResult(json);
                   setLoading(false);

            } catch(err){
                setError(err);
                setLoading(false);
            }
        })
    }, [url])
    
    return{loading,result,error};

}

export default useFetchData;