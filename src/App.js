import useClick from './useClick/useClick'

function App() {

  
  // const sayHello = () => console.log("say Hello")
  const sayHello = "hello"
  const elmentRef = useClick(sayHello)
  console.log("elmentRef: ", elmentRef)

  return (
    <div className="App">
      <h1 ref={elmentRef}>title</h1>
    </div>
  );
}

export default App;
