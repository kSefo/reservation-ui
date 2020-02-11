FROM node:12.15.0-alpine

WORKDIR /reservation-ui
COPY . /reservation-ui

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0

CMD ["npm", "run", "start"]

EXPOSE 3000
