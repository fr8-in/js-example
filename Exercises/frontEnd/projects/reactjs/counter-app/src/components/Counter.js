import React, { useState } from "react";


function Counter() {
  var [count, setCount] = useState(0);
  return (
    <div className="counter-form">
      <div className="col">
        <h1 className="results">{count}</h1>
      </div>
      <div className="col">
        <div className="btn-div">
          <button
            type="submit"
            onClick={() => setCount(count + 1)}
            className="btn"
          >
            Increase
          </button>
          <button
            type="submit"
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            type="reset"
            className={`btn btn-reset ${count ? '' : 'd-none'}`}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
