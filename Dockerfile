FROM node
WORKDIR /opt/tour-guide-app
COPY . .
RUN npm install
CMD ["npm", "run", "start:dev"]