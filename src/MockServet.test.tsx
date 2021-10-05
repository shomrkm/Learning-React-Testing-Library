import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, cleanup } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { MockServer } from './MockServer';

// 擬似的なAPIのサーバーを作る
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ username: 'Bred dummy' }))
  )
);

// テストの最初にサーバーを起動しておく
beforeAll(() => server.listen());
// サーバーの中身をテストごとにリセットする
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// 全てのテスト後にサーバーをクローズする
afterAll(() => server.close());

describe('Mocking API', () => {
  test('[Fetch success] Should display fetched data correctly and button disable', async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('heading')).toHaveTextContent('Bred dummy');
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
  test('[Fetch failure] Should display error message, no render heading and button enabled', async () => {
    // サーバーが返す内容を書き換え
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => res(ctx.status(404))
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByTestId('error')).toHaveTextContent(
      'Fetching Failed !'
    );
    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});
