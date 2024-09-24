
//- server
## 初期化
  $ npm init -y
  $ npm i -D express prisma ts-node
  $ npm i -D @prisma/client
  $ npm i cors nodemon typescript @types/cors @types/express @types/node

## Prisma
  $ npx prisma init --datasource-provider sqlite
  model 作成
  model から SQL 文を自動追加
    $ npx prisma migrate dev --name init
  GUI 上でデータを手動で操作する
    $ npx prisma studio

//- client
## 雛形作成
  $ npx create-next-app@latest
    √ What is your project named? ... ./
    √ Would you like to use TypeScript? ... No / Yes
    √ Would you like to use ESLint? ... No / Yes
    √ Would you like to use Tailwind CSS? ... No / Yes
    √ Would you like to use `src/` directory? ... No / Yes
    √ Would you like to use App Router? (recommended) ... No / Yes
    √ Would you like to customize the default import alias (@/*)? ... No / Yes
  $ npm i swr

## Deploy
  server, client をそれぞれ Github で管理
  環境変数を設定
    client
      key : NEXT_PUBLIC_API_URL
      value : http://localhost:8080(デプロイしたらURLを入れる)
    server
      ソースディレクトリ : /src
      構築コマンド : $ npm install
      開始コマンド : $npm run dev
      key : DATABASE_URL
      value : file:./dev.db
