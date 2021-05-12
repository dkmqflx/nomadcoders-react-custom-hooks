# Usage


### useTitle

- 문서의 이름을 바꿀 수 있는 hook

```jsx

import useTitle from './useTitle/useTitle'

function App() {

  const titleUpdater = useTitle("Loading ... ")

  // 3초 후, title이 바뀐다
  setTimeout(() => {
    titleUpdater("Data is loaded")
  }, 3000);

  return (
    <div className="App">
    </div>
  );
}

export default App;


```