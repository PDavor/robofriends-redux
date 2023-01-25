import React, { useState } from "react";

const CounterButton = ({ color }) => {
  const [count, setCount] = useState(0);
  return (
    <button
      id="counter"
      onClick={() => setCount((count) => count + 1)}
      color={color}
    >
      Count {count}
    </button>
  );
};

export default CounterButton;
