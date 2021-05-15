import useNotification from './useNotification/useNotification'

function App() {

    const triggerNotification = useNotification("Notification Click", {body:'notification body'})


    return (
        <div >
            <button onClick={triggerNotification}>Notificatoin Button</button>
        </div>
    )
}

export default App;



