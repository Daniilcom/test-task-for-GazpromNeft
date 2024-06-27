FROM node:18

USER root
WORKDIR /app

COPY ./package*.json ./

RUN npm install -g npm@10.8.1

COPY . .

RUN npm install typescript -g
RUN npm run build

RUN npm install -g ts-node
RUN npm run convert-csv-to-json

EXPOSE 8085

CMD [ "node", "dist/index.js" ]