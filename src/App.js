import useTitle from './useTitle/useTitle'

function App() {

  const titleUpdater = useTitle("Loading ... ")
  setTimeout(() => {
    console.log("setTimeOut")
    titleUpdater("Data is loaded")
  }, 3000);

 console.log("App render")
  return (
    <div className="App">
    </div>
  );
}

export default App;
