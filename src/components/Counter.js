import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" className="btn btn-primary fs-6" onClick={() => setCount(count + 1)}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <span className="px-4 fs-5">{count}</span>
      <button
        type="button"
        className="btn btn-primary fs-6"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}>
        <i className="fa-solid fa-minus"></i>
      </button>
    </div>
  );
};

export default Counter;
