#Build Stage Start
#Specify a base image
FROM node:19-alpine as builder

ENV REACT_APP_NAVER_SECRET=whdi5vd7tp
ENV REACT_APP_KOPIS_SECRET=b1f07d8905a945a4aff5a992dc1cbe76
#ENV REACT_APP_BASE_URL=http://54.180.119.66:8082/

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY package.json .

#Install dependencies
RUN npm install

#Copy remaining files
COPY . .

#Build the project for production
RUN npm run build

#Run Stage Start
FROM nginx:1.23.2-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

#Copy production build files from builder phase to nginx
COPY --from=builder /app/build /usr/share/nginx/html
