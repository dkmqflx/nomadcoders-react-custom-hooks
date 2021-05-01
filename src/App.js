import useInput from './useInput/useInput'


function App() {
  // const maxLen = (value) => value.length <= 10 
  const atCheck = (value) => !value.includes("@")

  const name = useInput("", atCheck)
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
