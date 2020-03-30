# Will be used in production

FROM node:alpine as build

ARG api_url
ENV REACT_APP_API_URL=$api_url

WORKDIR '/usr/src/app'

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm install
RUN npm install react-scripts -g
COPY . /usr/src/app
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]