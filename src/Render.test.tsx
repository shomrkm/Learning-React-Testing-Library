import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';

import { Render } from './Render';

describe('Rendering', () => {
  test('Should rencder all the elements correctly', () => {
    render(<Render />);
    // screen.debug();

    // 引数へ指定する Role と Element の対応は下記を参照
    // https://github.com/A11yance/aria-query#elements-to-roles
    //     screen.debug(screen.getByRole('heading'));

    // https://jestjs.io/docs/en/expect

    // h1 タグが存在するかをチェック
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
    expect(screen.getByText('Udemy')).toBeTruthy();
    // テキストが存在しないことをチェックしたい場合
    expect(screen.queryByText('Udeeeemy')).toBeNull();

    // test-id で検索したい場合
    expect(screen.getByTestId('copyright')).toBeTruthy();

    // screen.debug(screen.getByText('Udemy'));
  });
});
