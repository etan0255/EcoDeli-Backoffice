# Dockerfile

FROM node:18

# Crée le répertoire de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers
COPY . .

# Compile le frontend (optionnel selon la config)
RUN npm run build

# Expose le port Next.js (3000)
EXPOSE 3000

# Lance l'application
CMD ["npm", "run", "start"]

