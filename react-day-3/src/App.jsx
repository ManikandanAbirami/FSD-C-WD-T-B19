import NewButton from "./NewButton"

function App() {
  return (
    <>
      <button style={{ color: "red", background: "blue" }}>Save</button >
      <hr />
      <NewButton name="Orange" />
      <hr />
      <NewButton name="Yellow" />
      <hr />
      <NewButton name="Pink" />
      <hr />
      <NewButton name="Clear" />
    </>
  )
}

export default App
