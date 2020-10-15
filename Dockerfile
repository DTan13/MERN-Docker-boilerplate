FROM node:latest

WORKDIR /app/mern-docker-app

EXPOSE 3000

CMD [ "yarn","start-dev" ]