# ベースイメージを指定
FROM node:20

# 必要なシステムパッケージをインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    nasm \
    libpng-dev \
    pkg-config

ENV NODE_ENV=development

# 作業ディレクトリを作成
WORKDIR /app

# ソースコードをコピー
# package.json と yarn.lock を最初にコピーし、依存関係をインストール
COPY package.json yarn.lock /app/
RUN yarn install && yarn cache clean

# 全てのソースコードをコピー
COPY . /app

# Gulpをグローバルにインストール
RUN yarn global add gulp-cli

# 環境変数を使用してコマンドを切り替える
CMD ["sh", "-c", "if [ \"$ES5_MODE\" = \"true\" ]; then yarn run dev:es5; else yarn run dev; fi"]