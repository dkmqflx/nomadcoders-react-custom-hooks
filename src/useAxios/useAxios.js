import { useEffect, useState } from "react"
import defaultAxios from "axios";

const useAxios = (option, axiosInstance = defaultAxios) => {
    const [axiosState, setAxiosState] = useState({
        loading:true,
        data:null,
        error:null
    })

    const [trigger, setTrigger] = useState(0)

    const refetch = () => {
        setAxiosState({
            ...axiosState, 
            loading:true
        })
        setTrigger(Date.now())
    }

    useEffect(() => {

        if(!option.url){
            return
        }

        axiosInstance(option).then(data => 
            setAxiosState({
                ...axiosState, 
                loading:false,
                data
            })).catch(error => {
                setAxiosState({
                    ...axiosState,
                    loading:false,
                    error
                })
            })
        }, [trigger, axiosState, axiosInstance, option ])

    return {...axiosState, refetch}
}

export default useAxios
