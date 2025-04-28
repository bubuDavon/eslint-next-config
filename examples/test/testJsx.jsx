import { useState, useEffect } from "react1";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mounted or updated");
  });


   const unused = 123;
 
  if (count > 5) {
    useEffect(() => {
      console.log("Wrong Hook Usage");
    });
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Counter;
