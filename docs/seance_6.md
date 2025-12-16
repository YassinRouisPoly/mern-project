# Séance 6

## Résumé
L’objectif de la séance est une introduction à Vite et React.

## React
React est une bibliothèque fonctionnant avec Vite (dans la nouvelle version). Le principe de React est de créer des "composants"
de chaque élément que nous souhaitons utiliser sur notre interface afin de :
* Faciliter le dev
* Réduire la redondance
* Augmenter la réutilisabilité
* Réduire la taille du code

## JSX/TSX
Le JSX (pour JavaScript XML) est un langage javascript étendu afin de pouvoir traiter directement l'HTML en son sein.
La structure principale en JSX est le "JSX.Element" qui représente une simple balise HTML dans le javascript :
```js
function test() {
  <div>Bonjour</div> // ceci est une balise HTML, reconnue comme un objet "JSX.Element"
}
```
La réutilisation se fait tout simplement de la manière suivante : retourner dans une fonction un élément JSX:
```js
function test() {
  return <div>Bonjour</div>
}

test() // == <div> Bonjour </div>
```
Sauf que, pour rendre le code visuellement proche de HTML, JSX permet que cette fonction, soit tout simplement appelée comme une balise:
```js
function Test() {
  return <div>Bonjour</div>
}

<Test/> // == <div> Bonjour </div>
```
Et pour les paramètres... La seule différence est que les paramètres sont par défaut nommés:

```js
function Somme({a, b}) {
  return <div>{a+b}</div>
}

<Somme a={1} b={3}/> // == <div> 4 </div>
```

## Les composants REACT
Un composant React est tout simplement un élément JSX. avec certaines particularités quand il est utilisé avec certains principes Reacts.

## SPA et le Rendu
React n'est pas directement affiché par un navigateur, avant d'être hébergé, il est buildé en HTML, JS, CSS etc...
De plus, il existe en réalité... UN SEUL HTML ! C'est le "SPA" (Single Page Application).
Pour afficher les "différentes fausses pages" qu'on a créé, React va tout simplement "déssiner" les composants au fur et à mesure.
C'est-à-dire qu'à chaque fois qu'une modification est faite, React peut (selon sa politique de rendu) :
* Re-rendre un composant
* Re-rendre un ensemble de composants
* Re-rendre l'intégralité de la page

Ceci est fait en comparant l'état de la page dans ses versions précédentes, ou en particulier du "DOM"
 
## Mapping
Un map est le fait de transformer une liste de données, en une liste d'éléments.
```js
let noms = ["Yassin", "Mehdi", "John"]

let res = <ul>{ noms.map(nom => <li> {nom} </li>) }</ul>

res // == <ul><li>Yassin</li><li>Mehdi</li><li>John</li></ul>
```

Généralement, tous les éléments d'un map devraient avoir un "key" différent. Ceci permet de simplifier le rendu et éviter des cascades de rendus inutiles