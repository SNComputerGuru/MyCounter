import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <Counter count={count} />
      <div className="buttons">
        <button onClick={increment} data-testid="inc-btn">+</button>
        <button onClick={decrement} data-testid="dec-btn">-</button>
        <button onClick={reset} data-testid="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
