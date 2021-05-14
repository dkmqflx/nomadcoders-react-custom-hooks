import useFadeIn from './useFadeIn/useFadeIn'

function App() {


  const fadeIn = useFadeIn(3, 3)

  return (
    <div className="App">
      <h1 {...fadeIn}>useFadeIn</h1>
    </div>
  );
}

export default App;
