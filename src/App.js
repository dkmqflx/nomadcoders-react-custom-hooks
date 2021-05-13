import usePreventLeave from './usePreventLeave/usePreventLeave'

function App() {

  const  {enablePrevent, disablePrevent } = usePreventLeave()

  return (
    <div className="App">
      <button onClick={enablePrevent} >Project</button>
      <button onClick={disablePrevent}>UnProject</button>
    </div>
  );
}

export default App;
