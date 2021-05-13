import { useEffect } from 'react'

const useBeforeLeave = (onBefore) => {

    const handle = (e) => {
        const {clientY} = e
        if(clientY <= 0){
            onBefore()
        }
    }

    useEffect(() => {
        if(typeof onBefore  === "function"){
            document.addEventListener("mouseleave", handle)
        }
        return () => {
            if(typeof onBefore  === "function"){
                document.removeEventListener("mouseleave", handle)
            }

        }
    }, [])

}

export default useBeforeLeave
