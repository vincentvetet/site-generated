FROM node:22-alpine AS base
WORKDIR /app

# Prisma exécute un script post-install : son schéma doit donc être présent
# avant l'installation des dépendances.
COPY package.json ./
COPY prisma ./prisma
RUN npm install --no-audit --no-fund

COPY . .
RUN npx prisma generate && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
