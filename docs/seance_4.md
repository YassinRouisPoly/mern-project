# Séance 4

## Résumé
L’objectif du quatrième cours était d'implémenter toutes les méthodes CRUD dans une API.

## Test HTTP
La structure du dossier "test_http" contient désormais :
* /api
  * /articles
    * / (GET) - récupérer les articles
    * / (POST) - créer un article
  * /users
    * / (GET) - récupérer les utilisateurs
    * / (POST) - créer un utilisateur
  * /cars
    * / (GET) - récupérer toutes les voitures
    * / (POST) - créer une nouvelle voiture
    * /:id (GET) - récupérer une voiture en particulier
  * / (GET) - Page d'accueil