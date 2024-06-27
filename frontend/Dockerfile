FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.8.1

COPY . .

RUN chmod -R +x node_modules/.bin
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 3000