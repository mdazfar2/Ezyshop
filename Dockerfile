FROM node:20 as Base
WORKDIR /usr/src/ezyshop
COPY *.json *.mjs *.js  ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

FROM base AS development
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]


    