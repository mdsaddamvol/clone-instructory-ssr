FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install
# Bundle app source
COPY . /usr/src/app


CMD ["yarn" "run" "build"] --bind 0.0.0.0:$PORT
