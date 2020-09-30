FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

CMD ["yarn" "run" "build"] --bind 0.0.0.0:$PORT
