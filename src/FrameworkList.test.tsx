import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, cleanup } from '@testing-library/react';

import { FrameworkList, Item } from './FrameworkList';

afterEach(() => cleanup());

describe('Rendering the list with props', () => {
  test('Should render No data! when no data propped', () => {
    render(<FrameworkList frameworks={[]} />);
    expect(screen.getByText('No data !')).toBeTruthy();
  });
  test('Should Render list item correctly', () => {
    const dummy: Item[] = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Angular dummy' },
      { id: 3, item: 'Vue dummy' },
    ];
    render(<FrameworkList frameworks={dummy} />);
    const fraweworkItems = screen
      .getAllByRole('listitem')
      .map((ele) => ele.textContent);
    const dummyItems = dummy.map((ele) => ele.item);
    expect(fraweworkItems).toEqual(dummyItems);
    expect(screen.queryByText('No data !')).toBeNull();
  });
});
