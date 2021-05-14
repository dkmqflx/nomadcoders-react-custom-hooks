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



