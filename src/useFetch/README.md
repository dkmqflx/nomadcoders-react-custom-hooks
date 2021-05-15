# Usage


### useFetch

- 서버로 부터 데이터를 받아올 수 있는 hook

```jsx
import useFetch from './useFetch/useFetch'
function App() {

    const{loading, data} = useFetch("https://jsonplaceholder.typicode.com/todos/1")

    return (
        <div >
            {data && data.status}
            {loading && <div>loading</div>}
            <span>useFetch</span>        
        </div>
    )
}

export default App;


```

- `refetch`함수를 호출하게 되면 `axiosState`, `trigger` 값이 바뀌게 되므로, 다시 컴포넌트가 렌더링되어서 바뀐 값이 화면에 출력된다

```jsx

import { useEffect, useState } from "react"
import Axios from "axios";

const useFetch = (url) => {
    const [axiosState, setAxiosState] = useState({
        loading:true,
        data:null,
        error:null
    })

    const callUrl = async (url) => {
        const { data } = await Axios.get(url)
        setAxiosState({
            ...axiosState,
            loading:false,
            data
        })
    }

    useEffect(() => {

        if(!url){
            return
        }
        callUrl(url)

        }, [])

    return {...axiosState}
}

export default useFetch




```