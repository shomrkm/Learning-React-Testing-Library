# Source Code

Udemy の講義で使われるソースコードは下記。
https://github.com/GomaGoma676/react-testing-library-lesson

# About React-Testing-Library

- Enzyme は Hooks と相性が悪い
- React-Testing-Library は より React のテストに適した目的で開発された(2018-)
  Enzyme がコンポーネントの内部を詳細にテストするのに対して、Testing-Library はよりユーザ視点でテストする
- カスタムフックをテストするための機能も提供されている
- React hooks 登場後に採用が急激に増えている。今後、主流になっていく。

# Rendering Test

--env=jsdom --verbose と jest 実行オプションに追加されるとテスト名が結果に表示される
