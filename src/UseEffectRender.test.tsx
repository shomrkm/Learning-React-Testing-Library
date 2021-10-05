import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, waitFor } from '@testing-library/react';
import { UseEffectRender } from './UseEffectRender';

// useEffect で非同期関数を使った場合のテスト
describe('useEffect rendering', () => {
  test('Should render only after async function resolved', async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    // find を使うと非同期が完了するまで待つ (4秒くらいたっても見つからなければタイムあるとエラーとなる)
    // expect(await screen.findByText(/I am/)).toBeInTheDocument();
    waitFor(() => expect(screen.getByText(/I am/)).toBeInTheDocument());
  });
});
