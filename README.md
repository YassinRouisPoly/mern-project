# Projet MERN

Ce projet vise à étudier l'architecture MERN.

> Attention : Pour revoir une ancienne version du projet, vérifiez directement les Releases. <br>
> Le projet est toujours à la dernière version.

Ce README contiendra uniquement les étapes du projet.
Chaque étape aura son propre README.

Voir ci-dessous.

## Etapes du projet
* [Séance 1](./docs/seance_1.md)
* [Séance 2](./docs/seance_2.md)
* [Séance 3](./docs/seance_3.md)
* [Séance 4](./docs/seance_4.md)

## Organisation

Chaque Release du projet possède le nom de la séance/TP en question.
Pour une meilleure organisation, voici quelques règles suivies :
* **Requêtes :** Toutes les requêtes HTTP sont dans un fichier `*.http`.
<br><br>Le dossier `/test_http` contient les requêtes par dossier. Exemple, Pour une requête POST `/api/a/b/users`,
le fichier `users.http` se trouvera dans le dossier `/test_http/api/a/b`.
* **Versions :** Les versions sont séparées en Releases.

## Configuration

Le projet a été installé et configuré avec `pnpm`.
Par conséquent, si `npm start` ne fonctionne pas, utilisez une commange alternative :

### Installation
```bash
# avec pnpm
pnpm install
```
```bash
# avec npm
npm install
```

### Configuration du fichier ".env"
Créer un fichier `.env` dans le dossier principal avec :
```apacheconf
MONGODB_URI=VOTRE_CLE_MONGO
```
Remplacez "VOTRE_CLE_MONGO" avec le lien d'accès qui vous a été fourni pour connecter la base de données.
### Lancement
```bash
# avec pnpm
pnpm start
```
```bash
# avec npm
npm run dev
```