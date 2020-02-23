FROM node:10.19.0-alpine3.11

# Create app directory & will copy our source code here
WORKDIR /usr/src/app

# First, copy the package-lock.json and package.json,
# then install dependencies "INSIDE" the image
COPY package*.json ./
RUN npm install

# Copy all other source code
COPY . .

# Start our server
CMD [ "node", "index.js" ]