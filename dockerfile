# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# set up the enviroment vars:
ENV PRODUCTION=true
ENV NODE_PORT=8080
ENV REACT_APP_PRODUCTION=true
ENV REACT_APP_NODE_PORT=8080

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY ./package*.json ./

# Install production dependencies.
RUN npm install --only=production 

# Copy local code to the container image.
COPY . /

RUN npm run-script build

# Run the web service on container startup.
CMD [ "npm", "run-script", "start"]