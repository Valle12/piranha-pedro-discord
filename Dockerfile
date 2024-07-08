FROM oven/bun:latest

WORKDIR /home/bun/app

COPY ./package.json .
COPY ./bun.lockb .
COPY ./.env .
COPY ./src ./src

RUN bun install

CMD ["bun", "src/index.ts"]