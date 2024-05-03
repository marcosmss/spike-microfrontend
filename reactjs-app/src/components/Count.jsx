import React from "react";

import "../index.css";

export function Count({}) {
  // const Count = ({count, incrementCount, decrementCount}) => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <button onClick={() => decrementCount()}>decrementa</button>
        <h1>Contador React: {count}</h1>
        <button onClick={() => incrementCount()}>incrementa</button>
      </div>
    </div>
  );
};
