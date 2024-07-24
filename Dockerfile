# ベースイメージを指定
FROM node:18

# 必要なシステムパッケージをインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    nasm \
    libpng-dev \
    pkg-config

# 作業ディレクトリを作成
WORKDIR /app

# ソースコードをコピー
COPY build /app

# 依存関係をインストール
RUN yarn install

# Browserslistのデータベースを更新
RUN npx browserslist@latest --update-db

# Gulpをグローバルにインストール
RUN yarn global add gulp-cli

# コンテナ起動時に実行するコマンド
CMD ["yarn", "run", "dev"]
