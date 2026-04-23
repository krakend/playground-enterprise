FROM node:23-alpine

WORKDIR /home/app

ADD package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["node_modules/.bin/serve", "-p", "3000", "dist/"]

EXPOSE 3000
