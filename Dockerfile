FROM node:18-alpine

RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin

WORKDIR /app
COPY build .
COPY package.json .

# Sveltekit will bundle our dev dependencies, but we
# must ensure our *production* dependencies are available in the container.
RUN npm i --production

ENV NODE_ENV production

EXPOSE 3000

CMD node index.js
