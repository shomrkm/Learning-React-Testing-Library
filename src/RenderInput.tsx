import React, { memo } from 'react';

interface Props {
  outputConsole: (text: string) => void;
}

export const RenderInput: React.VFC<Props> = memo(({ outputConsole }) => {
  const [input, setInput] = React.useState('');

  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter'
        value={input}
        onChange={updateValue}
      />
      <button type='button' onClick={outputValue}>
        Console
      </button>
    </div>
  );
});
