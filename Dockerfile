# Private content API. Build compiles `.courses/` → `artifacts/`.
FROM node:22-bookworm-slim

WORKDIR /app

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

COPY . .
RUN yarn content:compile

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# `prestart` recompiles; safe if image is already baked
CMD ["yarn", "start"]
