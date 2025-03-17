import { useState } from 'react'
import Mom from './Mom';

function App() {
  const [name, setName] = useState("MK");
  function clickMe() {
    setName("SK");
    console.log("clicked");
  }

  return (
    <>
      {/* <h1>React - Hello, {name}</h1>
      <button onClick={clickMe}>click me!</button> */}
      <Mom />
    </>
  )
}

export default App
