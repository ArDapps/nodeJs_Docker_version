FROM node:18.14-alpine

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
CMD [ "node", "index.js" ]
