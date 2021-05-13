# Usage


### usePreventLeave

- 사용자가 페이지를 떠나기 전에 경고 메시지를 띄울 수 있는 함수를 반환한다

```jsx

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


```