FROM node:18-alpine AS build
WORKDIR /trustify-webapp

RUN npm install -g @angular/cli@15.1.6

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx AS runtime
COPY --from=build /trustify-webapp/dist/trustify-webapp /usr/share/nginx/html
