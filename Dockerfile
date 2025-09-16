FROM node:lts-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk add --no-cache git

WORKDIR Browser-OS
COPY . .

RUN yarn
RUN yarn build

CMD yarn start
