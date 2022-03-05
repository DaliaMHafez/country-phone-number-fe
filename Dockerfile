FROM node:14-alpine3.14 as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod
EXPOSE 4200
CMD ["npm", "start"]



