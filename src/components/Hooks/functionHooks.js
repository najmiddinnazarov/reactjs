import React, { useState } from "react";

const FunctionHooks = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("Hooks");

  const [data, setData] = useState({
    count: 0,
    name: "Hooks",
  });
  console.log(data);
  return (
    <div style={{ flex: 1 }}>
      <h1>Function Component</h1>
      <h1>Count: {data.count}</h1>
      <button onClick={() => setData({ ...data, count: data.count + 1 })}>
        Plus
      </button>
      <h1>{data.name}</h1>
      <input
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
    </div>
  );
};

export default FunctionHooks;
