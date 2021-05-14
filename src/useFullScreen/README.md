# Usage


### useFullScreen

- 요소를 full screen, exit full screen 하는 기능을 하는 hook

```jsx
import useFullScreen from './useFullScreen/useFullScreen'

function App() {
    const onChange = (isFull) => (
        console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen")
    )

    const { elemRef, triggerFullScreen, exitFullScreen} = useFullScreen(onChange)

    return (
        <div >
            <div 
            style={{backgroundColor:'blue'}}
            ref={elemRef}
            >
                <button onClick={triggerFullScreen}>FullScreen</button>
                <button onClick={exitFullScreen}>ExitFullScreen</button>
            </div>

        </div>
    )
}

export default App;


```

- 각각의 브라우저마다 `full screen`, `exit full screen`을 동작하기 위한 함수가 다르므로 이를 처리해주어야 한다.

```jsx
import { useRef } from 'react'

const useFullScreen = (callback) => {
    const elemRef = useRef()

    // full or exit full 할 때 마다 callback 함수를 실행하는 함수 
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



```