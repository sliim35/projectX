FROM node:alpine

WORKDIR /kantu_v2

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "server"]
