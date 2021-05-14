import { useRef } from 'react'

const useFullScreen = (callback) => {
    const elemRef = useRef()
    const runCallback = (isFull) => {
        if(typeof callback === "function"){
            callback(isFull)
        }
    }

    const triggerFullScreen = () => {
        if (elemRef.current) {
            if (elemRef.current.requestFullscreen) {
                elemRef.current.requestFullscreen();
            } else if (elemRef.current.mozRequestFullScreen) {
                elemRef.current.mozRequestFullScreen();
            } else if (elemRef.current.webkitRequestFullscreen) {
                elemRef.current.webkitRequestFullscreen();
            } else if (elemRef.current.msRequestFullscreen) {
                elemRef.current.msRequestFullscreen();
            }
        }
        runCallback(true)
    }

    const exitFullScreen = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        }
        runCallback(false)
    }

    return { elemRef, triggerFullScreen, exitFullScreen}
}

export default useFullScreen
