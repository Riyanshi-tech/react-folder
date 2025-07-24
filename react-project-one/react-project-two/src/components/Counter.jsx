import React, { useState } from 'react';
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0); // React state

  const handleClick = () => {
    setCount(count + 1); // Increase count on click
  };

  return (
    <div className='counter-container'>
      <p>You have clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
