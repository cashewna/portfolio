# syntax=docker/dockerfile:1

FROM node:24-alpine AS build
WORKDIR /site
COPY package.json ./
COPY src ./src
COPY static ./static
RUN node src/build.mjs

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/dist /usr/share/nginx/html
EXPOSE 8080
