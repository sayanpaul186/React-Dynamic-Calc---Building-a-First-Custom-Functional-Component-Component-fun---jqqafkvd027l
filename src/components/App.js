import React, { useState } from "react";
import Input from "./Input";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  const handleaddNumber = (e) => {
    setCount(e.target.value);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
  };

  function resetValFunc() {
    setCount("");
    setCount2("");
  }

  return (
    <div className="App">
      <h2>add numbers</h2>
      <input onChange={handleaddNumber} value={count} id="input1" type="number" />
      <input onChange={handleaddNumber2} value={count2} id="input2" type="number" />
      <Input values={count} values2={count2} id="result" resetVal={resetValFunc} />
    </div>
  );
};

export default App;
