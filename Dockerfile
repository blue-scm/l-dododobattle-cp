# ベースイメージを指定
FROM node:18

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
COPY ./build/package.json ./build/yarn.lock /app/build/
WORKDIR /app/build
RUN yarn install && yarn cache clean

COPY ./build /app/build
COPY ./html /app/html

# Browserslistのデータベースを更新
# RUN npx browserslist@latest --update-db

# Gulpをグローバルにインストール
RUN yarn global add gulp-cli

# コンテナ起動時に実行するコマンド
CMD ["yarn", "run", "dev"]