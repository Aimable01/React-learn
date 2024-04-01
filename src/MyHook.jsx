import React, { useState } from "react";
function MyHook() {
  const [num, setNum] = useState(0);

  function handleDecrement() {
    setNum(num - 1);
  }
  function hanldleIncrement() {
    setNum(num + 1);
  }
  function handleReset() {
    setNum(0);
  }

  return (
    <div>
      <hr />
      <p>Simple counter</p>
      <p>{num}</p>
      <button onClick={hanldleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default MyHook;
