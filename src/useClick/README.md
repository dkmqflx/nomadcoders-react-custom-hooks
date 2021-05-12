# Usage


### useClick

- component가 mount 된 다음에 element에 event를 등록하는 hook

```jsx

import useClick from './useClick/useClick'

function App() {

  const sayHello = () => console.log("say Hello")
  const elmentRef = useClick(sayHello)

  return (
    <div className="App">
      <h1 ref={elmentRef}>title</h1>
    </div>
  );
}

export default App;


```


```jsx

import { useEffect, useRef } from "react"

const useClick = (onClick) => {

    const element = useRef()
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("click", onClick)
        }
        //componentWillUnmount에 등록한 이벤트를 제거해준다 
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick)
            }
        }
    // 새로운 함수 사용하면 새로 해당 ref에 함수 등록
    }, [onClick])

    // 함수가 전달되지 않으면 useRef가 전달되지 않는다
    // 따라서 useEffect가 나중에 실행될 때 element.current는 undefined가 되므로 event가 등록되지 않는다

    // 해당 조건문을 useEffect 위에 사용하면 "useEffect" is called conditionally 에러 발생
    // hook은 최상단에서 사용되어야 한다 
    if (typeof onClick !== "function") {
        return;
    }

    return element

}

export default useClick



```