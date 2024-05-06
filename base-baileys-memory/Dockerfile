FROM node:20-bullseye as bot 
RUN mkdir -p /chatbot/images
COPY imagenes /chatbot/images/
WORKDIR /chatbot/app
COPY package*.json ./
RUN npm install
COPY . .
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT
CMD ["npm", "start"]
