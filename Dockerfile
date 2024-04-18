FROM node:lts-alpine

# bebas nama folder di docker
WORKDIR /monolith-app

COPY . .

RUN npm i

EXPOSE 8000

CMD npm run start