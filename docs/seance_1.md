# Séance 1

## Résumé
L’objectif du premier cours était de prendre en main les fonctionnalités de base de Express et NodeJS. De plus, pour pouvoir tester les endpoints créées avec Express, on peut utiliser un outil comme Postman.
Personnellement, j’utilise la suite JetBrains (particulièrement WebStorm) qui contient déjà tous les outils pour, y compris un testeur de requêtes HTTP.

## NodeJS

NodeJS est un programme basé sur JavaScript qui permet la gestion de scripts JS asynchrones selon la logique de travail. Par exemple, des actions qui prennent du temps s’exécutent de manière asynchrone par rapport au reste du code (ex. lecture de fichiers, requête web, commande CMD etc…).

## JSON

JSON pour "JavaScript Object Notation" est le format de serialisation de données de JS. Simple et rapide, il permet en un unique format de faire passer plusieurs types de données.
Avec JavaScript, manipuler le JSON devient très simple :
* Fusionner deux dictionnaires :
```js 
let dict = {...dictA, ...dictB} // nb : dictB va écraser les propriétés identiques à dictA
```
* Fusionner deux listes :
```js 
let liste = [...listA, ...listB]
```
* Décomposer un dictionnaire :
```js 
let { propA, propB } = dict
```
* Décomposer une liste :
```js 
let [ elA, elB ] = liste
```
* Assigner un dictionnaire
```js 
let dictA = {a: 1, b:2}
let dict = {
    success:true,
    dictA    // équivalent à 'dictA : dictA'
} 

console.log(dict)

// => {
//        success: true,
//        dictA: {a: 1, b: 2}
//    }


```

etc…

## Nodemon

Permet de relancer le script principal JS lors d’une modification.

## Express

Express est une librairie qui permet la création de endpoints REST simplement. Chaque endpoint (coté logique) admet sa
`request` et sa `response`.

La requête a toujours une méthode prédéfinie : `POST`, `GET`, `PUSH`, `UPDATE`, `DELETE`, etc...

Selon la requête, on peut récupérer les données de plusieurs manières.
* `request` `.params`<br>Paramètres variables de l’URL
* `request` `.body`<br>Contenu (RAW, uniquement avec POST) de la requête http
* `request` `.query`<br>Récupère directement les paramètres query ( ?v1=a&v2=b... ) dans l’URL


Chaque réponse peut être répondu avec :
* Un status (`200 = OK`, `404 = Not Found` par exemple)
* Un type : `raw` (html, js, buffer …) OU `json`
