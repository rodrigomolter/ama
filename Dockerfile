FROM node:20.11.1-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm i -f

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ngnix.conf /etc/nginx/conf.d/default.conf
COPY .env.production .env
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
