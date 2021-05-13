import useBeforeLeave from './useBeforeLeave/useBeforeLeave'

function App() {

  const  onLeave = () => alert("leave ?")
  // const  onLeave = "3"

  useBeforeLeave(onLeave)

  return (
    <div className="App">
      <h1>Leave</h1>
    </div>
  );
}

export default App;
