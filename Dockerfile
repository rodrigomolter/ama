FROM node:20.11.1-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm i -f

ARG VITE_APP_BACKEND_ENDPOINT
ARG VITE_APP_WS_ENDPOINT

ENV VITE_APP_BACKEND_ENDPOINT=$VITE_APP_BACKEND_ENDPOINT
ENV VITE_APP_WS_ENDPOINT=$VITE_APP_WS_ENDPOINT


COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ngnix.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
