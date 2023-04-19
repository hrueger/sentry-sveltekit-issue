FROM node:18-alpine

RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin

WORKDIR /app
COPY build .
COPY package.json .
COPY prisma .
ENV NODE_ENV production

RUN echo "nodeLinker: node-modules" > .yarnrc.yml && yarn set version berry && yarn plugin import workspace-tools && yarn workspaces focus --production && yarn setup

EXPOSE 3000

CMD npx prisma migrate deploy && node index.js