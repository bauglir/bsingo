FROM node:0.12.0

WORKDIR /bsingo
ADD . /bsingo

RUN npm install --production

CMD ["npm", "start"]
