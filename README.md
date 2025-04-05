# cookieを使った簡易ログイン認証

サンプル画面の共有など、他社と共有したいが本格的にログイン処理を作るほどでもない場合に活用

- Basic認証の代わり
- DBを使わない
- パスコードは`.env`で指定

### 補足

- cssは`sakura.css`を利用  
  変更の際は`app.html`のタグを削除するだけ
- vercelでのデプロイを想定  
  変更の際は`svelte.config.js`の修正が必要

## 使い方

1. gitでclone

   ```bash
   git clone http----
   ```

2. まずはnpm install

   ```bash
   npm install
   ```

3. root直下に`.env`ファイルを用意

- `PATH_CODE`という変数に、任意のログインパスワードを設定

  ```bash
  # .env
  PATH_CODE='hogehoge'
  ```

4. 動作確認

- dev環境
  ```bash
  npm run dev
  ```
- 本番プレビュー

  ```bash
  # まずはビルド
  npm run build

  # プレビュー
  npm run preview
  ```

## 期待動作

1. ログインしていない状態だと、強制的にログイン画面にリダイレクトされる
2. ログイン画面で、.envに指定したパスコードを入力すると、トップ画面に遷移できるようになる
   - ログインに成功するとcookieに`session`が作られる：期間7日
   - cookie保持期間中は、ログイン状態が保持される
