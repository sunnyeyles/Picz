FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev"]
