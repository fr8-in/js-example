import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container align-content-center mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
        <h1>Counter</h1><br/>
          <button onClick={() => setCount(count + 1)}>Increment +</button>
          <h3 className="px-4">{count}</h3>
          <button onClick={() => setCount(count - 1)}>Decrement -</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
