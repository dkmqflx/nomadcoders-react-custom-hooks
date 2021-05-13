# Usage


### useConfirm

- 정확히 말하면 useState, useEffect와 같은 것들을 사용하지 않기 때문에 hook은 아니다

- alert 창을 보여주고, 유저가 확인 버튼을 누른 경우에만 callback 함수를 실행하는 함수를 반환한다 

```jsx

import useConfirm from './useConfirm/useConfirm'

function App() {

  const deleteWord = () => console.log("Delete word")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWord, abort)

  return (
    <div className="App">
      <button onClick={confirmDelete} >클릭</button>
    </div>
  );
}

export default App;



```