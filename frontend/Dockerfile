FROM node:alpine as builder

WORKDIR /kantu_v2

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /kantu_v2

COPY ./nginx.conf  /etc/nginx/nginx.conf

COPY --from=builder /kantu_v2/public ./

EXPOSE 3000
