FROM node:current-slim

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE 3000
EXPOSE 35729

COPY . .
