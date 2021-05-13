import useConfirm from './useConfirm/useConfirm'

function App() {

  const deleteWord = () => console.log("Delete word")
  const abort = "sdf"
  const confirmDelete = useConfirm("Are you sure", deleteWord, abort)

  return (
    <div className="App">
      <button onClick={confirmDelete} >클릭</button>
    </div>
  );
}

export default App;
