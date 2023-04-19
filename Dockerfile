FROM node:18-alpine

RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin

WORKDIR /app
COPY build .
COPY package.json .
ENV NODE_ENV production

EXPOSE 3000

CMD node index.js