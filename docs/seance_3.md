# Séance 3

## Résumé
L’objectif du troisième était de faire persister les données dans une base de donnée MongoDB.

## L'asynchrone dans NodeJS

Etant donnée que la connection entre la base de donnée et le script n'est pas synchronisée (elle s'exécute en parallèle au thread principal),
pour pouvoir connecter et récupérer les données de la base, on va devoir utiliser `async` et `await`.

* `async`<br>Le mot clé async indique à l'interpréteur que la fonction définie qui va être exécutée n'est pas une simple fonction, mais une "promesse" (ou Promise en anglais).
* `await`<br>Ce mot clé permet à d'attendre le résultat d'une fonction asynchrone avant de continuer l'exécution du script. NB: `await` ne fonctionne que dans une fonction `async`


## Différence entre "Fonction asynchrone" et "Promesse"

La différence entre une fonction async et une promesse est uniquement au niveau de la syntaxe.<br>
Voici un exemple comparatif :
```js
// Déclaration d'une fonction asynchrone
async function maFonction1(param1, param2) {
  if(!param1) throw new Error("Oups"); // Déclenchement d'une erreur.

  await param2 ? maFonction1 : maFonction2; // Le "await" peut attendre une fonction async ou une promesse

  return 10; // Retourner une valeur se fait via "return".
}


// Déclaration d'une promesse
function maFonction2(param1, param2) {
    return new Promise((resolve, reject) => {
        if(!param1) reject(new Error("Oups")); // Déclenchement d'une erreur via "reject".

      (param2 ? maFonction1 : maFonction2).then( // puisque le "await" n'est pas disponible on utilise .then
          resolve(10) // Retourner une valeur se fait via "resolve".
      )
    })
}
```
Et pour les tester, les deux ont les mêmes propriétés :
```js
// - Attendre la fonction
await maFonction1(param1, param2)
await maFonction2(param1, param2)

// - Executer la fonction avec un callback
maFonction1(param1, param2).then((result) => { /* ... */ })
maFonction2(param1, param2).then((result) => { /* ... */ })

// - Anticiper une erreur
maFonction1(param1, param2).catch((err) => { /* ... */ })
maFonction2(param1, param2).catch((err) => { /* ... */ })
```

## Ajout d'un ".env"
Pour en savoir plus, rendez-vous au [README](../README.md)

## Test HTTP
La structure du dossier "test_http" contient désormais :
* /api
  * /articles
    * / (GET) - récupérer les articles
    * / (POST) - créer un article
  * /users
    * / (GET) - récupérer les utilisateurs
    * / (POST) - créer un utilisateur
  * / (GET) - Page d'accueil