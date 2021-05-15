import { useEffect, useState } from "react"
import Axios from "axios";

const useFetch = (url) => {
    const [axiosState, setAxiosState] = useState({
        loading:true,
        data:null,
        error:null
    })

    const callUrl = async (url) => {
        const { data } = await Axios.get(url)
        setAxiosState({
            ...axiosState,
            loading:false,
            data
        })
    }

    useEffect(() => {

        if(!url){
            return
        }
        callUrl(url)

        }, [])

    return {...axiosState}
}

export default useFetch
