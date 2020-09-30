FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build

CMD  ["npm run build"]
