import { useState } from "react";

import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount((c) => c + 1);
  }

  function decrease() {
    setcount((c) => (count > 0 ? c - 1 : c));
  }

  return (
    <>
      <h1>Count with React</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={increase}>Add value</button>
      <br /> <br />
      <button onClick={decrease}>Remove value</button>
    </>
  );
}

export default App;