import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function MyInput() {
  const [name, setName] = useState("");
  const inputRef = useRef("null");

  const handleUpdate = () => {
    const inputElement = inputRef.current;
    setName(inputElement.value);
  };
  return (
    <div>
      <label>Value</label>
      <input ref={inputRef} type="text" />
      <button onClick={handleUpdate}>Submit</button>
      <div>
        <h1>{`Your name is ${name}`}</h1>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <MyInput />
    </div>
  );
}

export default App;
