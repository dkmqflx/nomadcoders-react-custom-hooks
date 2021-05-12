import { useEffect, useRef } from "react"

const useClick = (onClick) => {

    const element = useRef()
    useEffect(() => {
        console.log("element: ", element)
        if(element.current){
            element.current.addEventListener("click", onClick)
        }
        //componentWillUnmount에 등록한 이벤트를 제거해준다 
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick)
            }
        }
    }, [onClick])


    if (typeof onClick !== "function") {
        return;
    }

    return element

}

export default useClick
