import "./App.css";
import { useRef, useEffect, useState } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { cleanup } from "@testing-library/react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false);

  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("component update!");
  //   }
  // });

  // useEffect(() => {
  //   console.log("component mount");
  // }, []); // Passing an empty array to useEffect will execute the callback function only at the component's mount time.

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("cleanup");
  //     clearInterval(intervalID);
  //   };
  // });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
