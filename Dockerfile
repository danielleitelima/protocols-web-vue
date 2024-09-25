FROM node:20-slim AS base

RUN npm install -g pnpm

WORKDIR /app
COPY package.json .
RUN pnpm install
COPY . .
CMD ["pnpm", "run", "dev"]