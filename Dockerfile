FROM node:latest

<<<<<<< HEAD

WORKDIR /usr/src/app

COPY . /usr/src/app
=======
WORKDIR /usr/src/app

COPY . /usr/src/app

>>>>>>> 0c5723bc080c21140a1d6b148d570650bb533418
RUN yarn install

CMD "yarn run build"
