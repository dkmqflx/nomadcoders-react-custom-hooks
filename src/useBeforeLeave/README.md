# Usage


### useBeforeLeave

- 사용자의 마우스가 브라우저 창을 벗어나면 실행된다

```jsx
import useBeforeLeave from './useBeforeLeave/useBeforeLeave'

function App() {

  const  onLeave = () => alert("leave ?")

  useBeforeLeave(onLeave)

  return (
    <div className="App">
      <h1>Leave</h1>
    </div>
  );
}

export default App;



```