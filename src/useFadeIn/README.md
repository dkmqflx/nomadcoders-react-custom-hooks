# Usage


### useFadeIn

- duration과 delay를 전달해서, 전달된 요소만큼 스타일이 적용되어서 사용자에게 보여지도록 한다.

```jsx
import useFadeIn from './useFadeIn/useFadeIn'

function App() {

  const fadeIn = useFadeIn(3, 3)

  return (
    <div className="App">
      <h1 {...fadeIn}>useFadeIn</h1>
    </div>
  );
}

export default App;


```

```jsx
import { useEffect, useRef } from "react"

const useFadeIn = (duration, delay) => {
    const elemRef = useRef()
    useEffect(() => {
        if(elemRef.current){
            const {current} = elemRef
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1
        }

    }, [])
    return {ref:elemRef, style:{opacity: 0}}
}

export default useFadeIn


```