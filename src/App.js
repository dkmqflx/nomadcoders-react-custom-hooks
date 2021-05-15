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



