FROM node:18-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --force

COPY . .

EXPOSE 5173

RUN npm rebuild

CMD ["npm", "run", "dev", "--", "--host"]
