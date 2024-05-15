# Establecer la imagen base
FROM node:20-bullseye as bot

# Establecer el directorio de trabajo
WORKDIR /chatbot/app/

# Copiar los archivos de configuración y las dependencias del proyecto
COPY package*.json ./

# Establecer la variable de entorno para permitir permisos inseguros
ENV npm_config_unsafe_perm=true

# Instalar las dependencias npm en silencio y cambiar el propietario de los módulos de Node.js al usuario 'node'
RUN npm install \
    && chown -R node /chatbot/app/node_modules
COPY . .
# Cambiar al usuario 'node'
RUN touch /chatbot/app/core.class.log \
    && chown -R node:node /chatbot/app/ \
    && chmod +x /chatbot/app/node_modules/.bin/eslint

USER node
# Definir los argumentos
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT

# Comando de inicio
CMD ["npm", "start"]