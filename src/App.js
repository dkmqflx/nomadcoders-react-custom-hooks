import useInput from './useInput/useInput'


function App() {
  const name = useInput("")
  return (
    <div className="App">
      <h1>useInput</h1>
      <input type="text" {...name}/>
      {/* {...name}은 
      value={name.value} onChange={name.onChnage}
      를 대체한다 */}
    </div>
  );
}

export default App;
