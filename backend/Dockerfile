# Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN apt-get update && apt-get install -y netcat-openbsd

EXPOSE 5000

CMD ["./wait-for.sh", "mysql", "node", "index.js"]


