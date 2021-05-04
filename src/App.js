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
