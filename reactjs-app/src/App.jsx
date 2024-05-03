import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Header } from "mf/components/Header";
import {Count} from "./components/Count";
// import { Count } from "./components/Count";

const App = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Header />

      <Count count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
