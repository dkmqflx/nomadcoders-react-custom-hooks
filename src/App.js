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



