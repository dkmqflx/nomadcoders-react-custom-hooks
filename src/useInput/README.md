# Usage


### 1. max length check

```jsx
import useInput from './useInput/useInput'

function App() {
  const maxLen = (value) => value.length <= 10 
  const name = useInput("", maxLen)
  return (
    <div className="App">
      <h1>useInput</h1>
      <input type="text" {...name}/>

    </div>
  );
}

export default App;

```

---

### 2. at mark check

```jsx
import useInput from './useInput/useInput'

function App() {
  const maxLen = (value) => value.length <= 10 
  const name = useInput("", maxLen)
  return (
    <div className="App">
      <h1>useInput</h1>
      <input type="text" {...name}/>

    </div>
  );
}

export default App;

```
