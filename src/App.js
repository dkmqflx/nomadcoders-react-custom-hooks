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



