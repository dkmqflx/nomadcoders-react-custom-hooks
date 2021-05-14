import { useEffect, useRef } from "react"

const useFadeIn = (duration, delay) => {
    const elemRef = useRef()
    useEffect(() => {
        if(elemRef.current){
            const {current} = elemRef
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1
        }

    }, [duration, delay])

    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
        }

    return {ref:elemRef, style:{opacity: 0}}
}

export default useFadeIn
