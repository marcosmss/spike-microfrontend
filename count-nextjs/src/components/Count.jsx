'use client'

import React from "react";

function Count({ text }) {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <button onClick={() => decrementCount()}>Menos</button>
      <h1>{text || "Nextjs Contador"}: {count}</h1>
      <button onClick={() => incrementCount()}>Mais</button>
    </div>
  );
};

export default Count;