import NewButton from "./NewButton"

function App() {
  return (
    <>
      <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg">
        <div className="rounded-md bg-yellow shadow-xs">
          Manikandan Anbalagan
        </div>
      </div>
      <button className="p-4 bg-slate-700">Save</button >
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
