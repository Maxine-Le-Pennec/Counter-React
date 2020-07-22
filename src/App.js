import React, { useState } from "react";
import img from "./components/img/vector.svg";
import Button from "./components/Button";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <body>
      <header>
        <img src={img} alt="calculatrice"></img>
        <h1>Counter React</h1>
      </header>
      <main>
        <Button value={counter} funcCount={setCounter}></Button>
      </main>
    </body>
  );
};

export default App;
