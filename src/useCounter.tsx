import { useState } from 'react';

export const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const double = () => {
    setCount((c) => c * 2);
  };
  const triple = () => {
    setCount((c) => c * 3);
  };
  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, double, triple, reset };
};
