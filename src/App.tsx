import React from 'react';

import { RenderInput } from './RenderInput';
import { FrameworkList, Item } from './FrameworkList';
import { MockServer } from './MockServer';
import { CustomHooks } from './CustomHooks';

export const App: React.VFC = () => {
  const output = (text: string) => {
    console.log(text);
  };

  const data: Item[] = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <RenderInput outputConsole={output} />
        {/* <FrameworkList frameworks={data} /> */}
        <FrameworkList frameworks={data} />
        <MockServer />
        <CustomHooks />
      </header>
    </div>
  );
};
