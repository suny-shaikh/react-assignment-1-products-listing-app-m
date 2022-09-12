import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" className="btn btn-primary px-2" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span className="px-4 fs-4">{count}</span>
      <button
        type="button"
        className="btn btn-primary px-2"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
