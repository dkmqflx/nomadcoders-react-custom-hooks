# Usage


### 1. max length check

- tab을 눌렀을 때, 해당 tab에 관련된 내용만 보여준다

- useTabs는 현재 Item에 해당하는 `currentItem`과, `currentItem`을 변경할 수 있는 `setState`가 반환된다.

- 따라서, 반환된 `setState`를 사용해서  `currentItem`을 변경할 수 있고, 이는 외부 함수가 종료되더라도 내부 함수에서 외부 함수에 접근할 수 있는 `Closuer`의 개념과 관련있다.

```jsx
import useTabs from './useTabs/useTabs'

function App() {

  const contents = [
    {tab: "Section1",
    content: "Content1 of Section1"},
    {tab: "Section2",
    content: "Content2 of Section2"}
  ]

  const { currentItem, changeItem } = useTabs(0, contents)

  return (
    <div className="App">
      {contents.map((content, idx) => 
      <button key={idx} onClick={()=>changeItem(idx)}>{content.tab}</button>
        )}
      <p>{currentItem.content}</p>
    </div>
  );
}

export default App;


```
