FROM node:7.7.2-alpine
WORKDIR /shoppe-clone-react-ts/server
COPY package.json .
RUN npm install --quiet
COPY . .