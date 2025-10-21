# Séance 2

## Résumé
L’objectif du deuxième était de simplifier l'écriture de routes en séparant chaque script sous format MVC.<br>
Ainsi chaque controller, chaque route a son propre fichier.

## Test HTTP
La structure du dossier "test_http" contient désormais :
* /api
  * /articles
    * /test (GET) - page de test
    * / (POST) - créer un article
  * users
    * / (GET) - récupérer les utilisateurs
    * / (POST) - créer un utilisateur