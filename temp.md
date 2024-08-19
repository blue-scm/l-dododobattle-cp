README最終更新日：2024.08.19
  
## 概要
このプロジェクトでは、HTML、CSS、JavaScriptを生成するために、EJS、SCSS、ES6といったソースファイルを使用しています。  
Dockerを利用して簡単に開発環境を構築し、これらのソースファイルをコンパイルして最終的なファイルを生成できます。

## 環境構築
### 1.Dockerのインストール
Dockerをインストールしていない場合は、[Docker公式サイト](https://www.docker.com/ja-jp/)からDocker for Mac（または他のOSに対応したバージョン）をダウンロードしてインストールしてください。

### 2.プロジェクトに移動
ターミナルでプロジェクトのルートディレクトリ（l-dododobattle）に移動します。

### 3.Dockerコンテナのビルドと起動
以下のコマンドを実行して、プロジェクトのDockerコンテナをビルドし、バックグラウンド（デタッチモード）で起動します。
```
$ docker-compose up -d --build
```
このコマンドにより、以下の操作が自動的に行われます:
- 必要なDockerイメージのビルド
- Webサーバーとフロントエンド用のコンテナの起動

### 4.コンテナの停止と削除
開発作業が終了したら、以下のコマンドでコンテナを停止し、削除します。
ボリュームも削除されるので、コンテナ内に保存された一時データもクリアされます。
```
$ docker-compose down -v
```

## ソースコードの構造について
このプロジェクトでは、通常のHTML、CSS、JavaScriptファイルを生成するために、以下のソースファイルを使用しています：
- **EJS** (`.ejs` ファイル): HTMLのテンプレートエンジンです。EJSを使うと、動的な内容を含んだHTMLファイルを生成できます。`src/assets/ejs` フォルダ内に配置されているEJSファイルがコンパイルされて、最終的なHTMLファイルが生成されます。
- **SCSS** (`.scss` ファイル): CSSの拡張言語で、ネストや変数、ミックスインなどを利用して、より効率的にスタイルを管理できます。`src/assets/scss` フォルダ内のSCSSファイルがコンパイルされ、最終的なCSSファイルが生成されます。
- **ES6** (`.js` ファイル): JavaScriptの最新仕様で書かれたコードです。`src/assets/es6` フォルダ内のES6ファイルがコンパイルされ、ブラウザ互換性のあるJavaScript（ES5）に変換されます。

## Docker構成について
このプロジェクトでは、以下の2つのサービスをdocker-composeで管理しています:
- webserver: Apacheを使用したWebサーバー。ホストマシンのポート8186でアクセスできます。（compose.yamlのportsの設定から、任意のポートに変更可能）
- frontend: フロントエンドのビルド環境。Browsersyncを使用してリアルタイムでブラウザのリロードが行えます。

設定は、プロジェクトルートの docker-compose.yml ファイルで定義されています。
```
services:
  webserver:
    image: httpd:latest
    volumes:
      - ./html:/usr/local/apache2/htdocs/
    ports:
      - "8186:80" // 「8186」は任意のポート番号に変更可能

  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./build:/app/build
      - ./html:/app/html
      - nodemodule-content:/app/build/node_modules
    environment:
      - WEB_SERVER_PROXY=webserver:80
      - BROWSER_SYNC_LOCAL_PORT=3005 // 「3005」「3006」も任意の番号に変更可能
      - BROWSER_SYNC_UI_PORT=3006 // 同上
    ports:
      - "3005:3005" // 同上
      - "3006:3006" // 同上
```

## Gulpタスクの実行
フロントエンドのタスク（CSSやJavaScriptのビルドなど）は、`frontend` コンテナ内で自動的に実行されます。必要な設定は、プロジェクトのconfig.jsファイルに定義されています。

## トラブルシューティング
- Dockerが正しく起動しない場合: Dockerのログを確認するか、`docker-compose logs`コマンドでコンテナのログを確認してください。
- ポート競合: 他のサービスが既にポート8186や3005、3006を使用している場合は、`docker-compose.yml`でポートを変更してください。

## もしDockerやコンパイルが難しい場合
DockerやEJS、SCSS、ES6などの使用に不慣れで、これらのツールを使うのが難しい場合は、コンパイル後の最終的なHTML、CSS、JavaScriptファイルを直接修正してください。これらのファイルは、プロジェクトの html フォルダ内に出力されています。