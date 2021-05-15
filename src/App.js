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



