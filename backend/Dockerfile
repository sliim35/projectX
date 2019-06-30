FROM node:alpine

WORKDIR /kantu_v2

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "server"]
