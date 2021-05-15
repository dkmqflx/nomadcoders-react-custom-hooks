# Usage


### useAxios

- 상태가 변할 때 마다 서버로 부터 데이터를 받아올 수 있는 hook

```jsx
import useAxios from './useAxios/useAxios'
function App() {

    const{loading, data, refetch} = useAxios({url:
        "https://jsonplaceholder.typicode.com/todos/1"})

    return (
        <div >
            {data && data.status}
            {loading && <span>loading</span>}
            <button onClick={refetch}>refetch Button</button>
        </div>
    )
}

export default App;

```

- `refetch`함수를 호출하게 되면 `axiosState`, `trigger` 값이 바뀌게 되므로, 다시 컴포넌트가 렌더링되어서 바뀐 값이 화면에 출력된다

```jsx

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


```