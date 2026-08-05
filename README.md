Wall time: 1 seconds
Output:
# Site Generated

Plateforme de gestion de boutiques, commandes et utilisateurs, construite avec Next.js 15, React 19, TypeScript, Tailwind, Prisma/PostgreSQL et Better Auth.

## Lancer en local

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Ou avec Docker : `docker compose up --build` (app sur `http://localhost:3000`, Adminer sur `http://localhost:8080`).

## À configurer avant production

1. Générer un `BETTER_AUTH_SECRET` robuste et renseigner l’URL publique.
2. Créer les applications OAuth Google et Discord ; les callbacks sont `/api/auth/callback/google` et `/api/auth/callback/discord`.
3. Appliquer les migrations PostgreSQL et attribuer le rôle `ADMIN` au premier administrateur.
4. Brancher un fournisseur de stockage pour les fichiers (`/api/upload`) et un fournisseur e-mail pour les liens de réinitialisation.

Les routes API utilisent des sessions Better Auth, une validation Zod, un contrôle d’origine pour les mutations et un limiteur de requêtes local. Pour du multi-instance, remplacer ce dernier par Redis/Upstash.

