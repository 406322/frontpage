FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

CMD ["node", "src/server.js"]
EXPOSE 8080