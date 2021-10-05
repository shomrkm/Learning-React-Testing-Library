import React, { memo } from 'react';

export interface Item {
  id: number;
  item: string;
}

interface Props {
  frameworks: Item[];
}

export const FrameworkList: React.VFC<Props> = memo(
  ({ frameworks: fraweworks }) => {
    if (!fraweworks.length) {
      return <h1>No data !</h1>;
    }

    return (
      <div>
        <ul>
          {fraweworks.map((item: Item) => (
            <li key={item.id}>{item.item}</li>
          ))}
        </ul>
      </div>
    );
  }
);
