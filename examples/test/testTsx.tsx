import React, { useState, useEffect } from "react";

// 示例组件
const TestComponent: React.FC = () => {
  const [count, setCount] = useState<any>(0);

  const unusedFunction = () => {
    console.log('This is an unused function');
  };

  if (count > 5) {
    useEffect(() => {
      console.log("Wrong Hook Usage");
    });
  }
  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TestComponent;
