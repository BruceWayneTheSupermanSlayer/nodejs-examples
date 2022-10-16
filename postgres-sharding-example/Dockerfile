FROM node:14.20.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY tsconfig.json ./
COPY ./ ./
EXPOSE 3000
CMD ["npm", "start"]