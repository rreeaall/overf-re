//Mål: - Kjenne til datatypen Map - Kjenne til datatypen Set - Kjenne til hvordan bruke datatypene og hvilken som brukes nå

Innholdsfortegnelse:
1. Map
2. Set

'Map' og 'Set' er to nye datatyper vi kan bruke i JavaScript. Begge minner om vanlige objekter, men har noen unike fordeler som objekter ikke har. Blant annet er det lettere å søke etter verdier, forhindre duplikater m.m. 

Map:

Map skiller seg fra objekter ved at:

    Kan hente ut størrelsen direkte med .size
    Kan gå igjennom verdiene (iterere) uten å konvertere objektet til liste med Object.entries(myObj), Object.values(myObj) eller Object.keys(myObj)
    Kan bruke alle datatyper som nøkkel. Objekter kan kun ha «string» som key {‘key’: value}
    Rekkefølgen på elementene er ivaretatt. Objekter garanterer ikke rekkefølgen.

Lage en ny map:

En måte er å lage en tom Map og fylle denne ved hjelp av en funksjon.

// fjernet verdier for å forenkle
const personList = [
  ...
];

// Standard måte
const persons = new Map();
console.log(persons); // Map(0) {}

// Bruke en funksjon til å fylle vår nye map
function addPerson(person) {
  const { id, name } = person;
  persons.set(id, name); // map.set(key, value) => for å sette en verdi
}

personList.map(addPerson);

console.log(persons); // Map(3) { 1 => 'Stian', 2 => 'Marius', 3 => 'Frode' }

Vi kan også lage en Map ved å kjenne til hva en Map trenger. Måten å gjøre det på er å lage en liste med lister eller bruke objekter.

// bruk av lister med lister
const initialList = [
  ["1", "string"],
  [true, "boolean"],
  [1, "number"]
];
const initialMap = new Map(initialList);
console.log(initialMap); // Map(3) { '1' => 'string', true => 'boolean', 1 => 'number' }

// bruk av objekter og Object.entries() som lager en liste med lister
const marius = {
  name: "Marius Wallin",
  age: 35,
  gender: "Male"
};

// [ [ 'name', 'Marius Wallin' ], [ 'age', 35 ], [ 'gender', 'Male' ] ]
console.log(Object.entries(marius));

const mapFromEntries = new Map(Object.entries(marius));

// Map(3) { 'name' => 'Marius Wallin', 'age' => 35, 'gender' => 'Male' }
console.log(mapFromEntries);

Gjøre om en Map til objekt:

Vi kan gå fra objekter til Map og tilbake igjen. Vi kan også om en Map til en array.

const revertMapToObject = Object.fromEntries(mapFromEntries);

// { name: 'Marius Wallin', age: 35, gender: 'Male' }
console.log(revertMapToObject);

const mapToArray = Array.from(mapFromEntries);

// [ [ 'name', 'Marius Wallin' ], [ 'age', 35 ], [ 'gender', 'Male' ] ]
console.log(mapToArray);

Map metoder:

Når vi bruker Map får vi tilgang til en rekke metoder som kan brukes.

Legge til verdier:

Sette verdier med map.set(key, value) => key kan være number, string, boolean

// legge til verdier
const anotherList = [
  ["1", "string"],
  [true, "boolean"],
  [1, "number"]
];

const anotherMap = new Map(anotherList);

 // Map(3) { '1' => 'string', true => 'boolean', 1 => 'number' }
console.log(anotherMap);

anotherMap.set(1, "anotherNumber");

// Map(3) { '1' => 'string', true => 'boolean', 1 => 'anotherNumber' }
console.log(anotherMap);

Hente verdier:

// has
let hasValue = anotherMap.has(1);
console.log(hasValue); // true

// get
let getValue = anotherMap.get("1");
console.log(getValue); // string

// size
console.log(anotherMap.size); // 3

// keys (henter alle nøklene som identifiserer en verdi
console.log(anotherMap.keys()); // [Map Iterator] { '1', true }

// values (henter alle verdiene)
console.log(anotherMap.values()); // [Map Iterator] { 'string', 'boolean' }

Fjerne verdier:

// delete
console.log(anotherMap.size); // 3
anotherMap.delete(1); // .delete(key)
console.log(anotherMap.size); // 2

// clear
anotherMap.clear()
console.log(anotherMap.size); // 0

Gå igjennom verdiene (iterere):

anotherMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // 1: string true: boolean
  });
  
  // deconstruct key og value fra map
  for (const [key, value] of anotherMap) {
    console.log(`${key}: ${value}`);
  }
  
  Set:

  Set skiller seg fra Map ved at den ikke har en nøkkel (key).

  Lage en ny Set:

  const set = new Set(); // Set(0) {}

  Gjøre om Set til liste:

  Vi gå frem og tilbake mellom Set og lister

const numbers = new Set([1, 2, 3, 4, 3]);
console.log(numbers); // Set(4) { 1, 2, 3, 4 }
const numbersAsSetToArray = [...numbers];
console.log(numbersAsSetToArray); // [ 1, 2, 3, 4 ]

Set metoder:

Når vi bruker Set får vi tilgang til en rekke metoder vi kan bruke.

Legge til verdier:

Når vi legger til verdier så får vi ikke duplikater. Det er en av fordelene med Set.

set.add("simen");
set.add("finn");
set.add("fride");
set.add("simen");
console.log(set); // Set(3) { 'simen', 'finn', 'fride' }

Hente verdier:

console.log(set.size); // 3
console.log(set.has("simen")); // true
console.log(set.delete("finn")); // true
console.log(set.delete("lars")); // false

Fjerne verdier:

console.log(set.clear());
console.log(set.size); // 0

Gå igjennom verdier (iterere) i Set:

const numbers = new Set([1, 2, 3, 4, 3]);
for (const value of numbers) {
  console.log(value); // 1 2 3 4
}


kode fra codesandbox:
https://codesandbox.io/s/map-og-set-fjm9f?from-embed

Dokumentasjon
MDN Map:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

MDN Set:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set