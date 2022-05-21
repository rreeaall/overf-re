//Mål: - Kjenne til hva ...rest er og hvordan ...rest brukes - Kjenne til hva ...spread er og hvordan ...spread brukes

Spread:

For å hente ut data fra lister og objekter kan vi bruke spread. Spread 'sprer' verdiene fra den opprinnelige listen eller objektet. Vi kan se for oss at spread fjerner {} eller [] og kun gir oss verdiene tilbake.

Spread kan brukes til å:

    Slå sammen lister
    Dupliserer lister
    Konvertere en string til liste
    Dele opp lister
    Konvertere nodeList (det vi får når vi bruker querySelectorAll()) til liste

Kjennetegnet på spread er:

// spread bruker 3 prikker
...

// Bruk av spread

const listOne = [1, 2, 3];
const listTwo = [3, 4, 5];

// Slå sammen lister
const merged = [...listOne, ...listTwo];
console.log(merged); // [1, 2, 3, 3, 4, 5]

// Slå sammen objekter
const pets = { dogs: 1, cats: 2 };

// Bruker spread til å "utvide" originalen ved å legge til ny verdi
let petsCopy = { ...pets, birds: 3 };
console.log(petsCopy) // {dogs: 1, cats: 2, birds: 3}

// Duplisere
const cloned = [...listOne];
console.log(cloned); // [1, 2, 3]

// String til liste
const letters = [..."hiof"];
console.log(letters); // ["h", "i", "o", "f"]

// NodeList fra QuerySelectorAll()
const liElementsAsNodeList = li.querySelectorAll()
const liElementsAsArray = [...liElementsAsNodeList]

// Eksempel med spread i funksjon. 
// Her sprer vi verdiene utover (vi fjerner []) ved hjelp av ...

function spread(dogs, cat, birds) {
  console.log(dogs);
  console.log(cat);
  console.log(birds);
}

console.log(spread(...[1, "Fido", 3, 4])); // dogs = 1, cat = "test", birds = 3

Rest:

Når vi bruker spread syntax i funksjoner kalles det rest parameters og fungerer likt som spread. I eksempelet nedenfor blir c en liste med resterende verdier. Derav navnet rest.

// Rest parameters

function functionWithRest(dogs, cats, ...birds) {
  console.log(dogs);
  console.log(cats);
  console.log(birds);
}

functionWithRest(1, 2, 3, 4); // dogs = 1, cats = 2, birds = [3, 4]



kode fra codesandbox:
// Spread bruksområder når vi jobber med lister (fungerer likt på objekter)

const listOne = [1, 2, 3];
const listTwo = [3, 4, 5];

// Slå sammen lister
const merged = [...listOne, ...listTwo];
console.log(merged); // [1, 2, 3, 3, 4, 5]

// Slå sammen objekter
const originalObj = { a: 1, b: 2 };

// Bruker spread til å "utvide" originalen ved å legge til ny verdi
let newCopy = { ...originalObj, c: 3 };
console.log(newCopy); // {a: 1, b: 2, c: 3}

// Duplisere
const cloned = [...listOne];
console.log(cloned); // [1, 2, 3]

// String til liste
const hiofArray = [..."hiof"];
console.log(hiofArray); // ["h", "i", "o", "f"]

// NodeList fra QuerySelectorAll()
// const liElementsAsNodeList = li.querySelectorAll();
// const liElementsAsArray = [...liElementsAsNodeList];

// Eksempel med spread. Her sprer vi verdiene utover (vi fjerner []) ved hjelp av ...

function spread(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(spread(...[1, "test", 3, 4])); // a = 1, b = "test", c = 3

Dokumentasjon
MDN Rest:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

MDN Spread:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax