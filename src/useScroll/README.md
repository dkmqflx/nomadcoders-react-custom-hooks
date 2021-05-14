# Usage


### useScroll

- 유저가 화면을 scroll 할 때 이벤트를 발생하도록 하는 hook

```jsx
import useScroll from './useScroll/useScroll'

function App() {

    const { y } = useScroll()

    return (
        <div style={{height:'1000vh'}}>
            <h1 style={{ position:"fixed" , color : y > 100 ? "red" : "blue" }}>useScroll</h1>
        </div>
    )
}

export default App;

```

- 사용자가 scroll을 할 때 마다 onScroll 함수가 실행되는데, onScroll 함수 안에는 setPosition으로 scroll의 position을 다시 설정해준다

- 따라서 position의 값이 바뀌게 되면, 해당 값에 따라 `h1`태그의 색깔이 변하게 된다


```jsx
import { useEffect, useState } from 'react'

const useScroll = () => {
    const [position, setPosition] = useState({x:0, y:0})

    const onScroll = () => {
        setPosition({x:window.scrollX, y:window.scrollY})
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return position
}

export default useScroll



```