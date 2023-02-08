# Fetching the latest node image on alpine linux
FROM node:9-alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install 

#port number
EXPOSE 3000

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start







