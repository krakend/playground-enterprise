FROM node:23-alpine

WORKDIR /home/app

# Install only the runtime deps (express, @anthropic-ai/sdk, ws). No build
# step: the SPA is plain HTML/CSS/JS in src/, served as static by server.js.
ADD package.json .
RUN npm install --omit=dev

COPY . .

CMD ["node", "server.js"]

EXPOSE 3000
