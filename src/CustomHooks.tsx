import React, { memo } from 'react';

import { useCounter } from './useCounter';

export const CustomHooks: React.VFC = memo(() => {
  const { count, increment, decrement, double, triple, reset } = useCounter(3);

  return (
    <div>
      <p>{count}</p>
      <button type='button' onClick={increment}>
        Increment
      </button>
      <button type='button' onClick={decrement}>
        Decrement
      </button>
      <button type='button' onClick={double}>
        double
      </button>
      <button type='button' onClick={triple}>
        triple
      </button>
      <button type='button' onClick={reset}>
        reset
      </button>
    </div>
  );
});
