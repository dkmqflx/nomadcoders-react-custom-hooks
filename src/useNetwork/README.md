# Usage


### useNetwork

- navigator가 online 또는 offline 되는 것을 막아준다

```jsx
import useNetwork from './useNetwork/useNetwork'

function App() {

    const onNetworkChange = isOnline => (
        console.log(isOnline ? "We are back online" : "We just got offline")
    )
    const isOnline = useNetwork(onNetworkChange);

    return (
        <h1>{isOnline ? "We are online" : "We are offline"}</h1>
    )
}

export default App;


```

- `online` 또는 `offline` 이벤트가 발생할 때 마다 handleChange 함수가 호출된다 

- 따라서 전달된 onChange 함수가 실행되고, `navigator.onLine`의 상태가 `setStatus`에 의해 바뀌기 때문에 `status` 값을 전달 받은 `App.js` 에서는
`h1`태그 안에 다른 글자가 보이게 된다.

```jsx
import { useEffect, useState } from 'react'

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine)

    const handleChange = () => {
        if(typeof onChange === "function"){
            onChange(navigator.onLine)
        }
        setStatus(navigator.onLine)

    }
    useEffect(() => {
        window.addEventListener("online", handleChange)
        window.addEventListener("offline", handleChange)

        return () => {
            window.removeEventListener("online", handleChange)
            window.removeEventListener("offline", handleChange)
        }
    }, [])
    return status
}

export default useNetwork



```