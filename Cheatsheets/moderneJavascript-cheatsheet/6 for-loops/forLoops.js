//Mål: - Kjenne til hvordan bruke vanlige løkker - Kjenne til hvordan bruke for-of og forEach

Vanlig løkker brukes fortsatt, men vi har nå flere måter å skrive løkker på:
- for-of
- for-in (lite brukte så viser ikke denne)
 -forEach

Vanlig løkke:

const baseArray = Array.from('hiof'); // lager en array med ['h','i','o','f']

for (let i = 0; i < baseArray.length; i += 1) {
  console.log(baseArray[i]); // h, i, o, f
}

For-of:

For-of gir oss tilgang til selve verdien i listen. Altså vi trenger ikke å bruke liste[index] for å hente ut verdien.

Når vi jobber med objekter må vi bruke noen ekstra "triks" (Objects.keys(), Object.entries(), Object.values()) for å kunne gå igjennom (iterere over) verdiene.

const students = {
  lars: 22,
  morten: 24,
  finn: 27,
};

const numberOfDogs = ['1', '2', , '4'];

// får ut selve verdien i en liste
for (const value of numberOfDogs) {
  console.log(value); // 1, 2, undefined, 4
}

// array.entries() gjør at vi kan hente ut index og verdien for en liste
for (const [index, value] of numberOfDogs.entries()) {
  console.log(index, value); // 0 '1', 1 '2', 2 undefined, 3 '4'
}

// Object.entries(students) gir oss "nøkkelen" og verdien i objektet
for (const [key, value] of Object.entries(students)) {
  console.log(key, value); // lars 22 morten 24 finn 27
}

forEach:

// lager en array med ['h','i','o','f']
const letters = Array.from('hiof');

// uten index
// h, i, o, f
letters.forEach(letter => console.log(letter));

// med index
// 0 h, 1 i, 2 o, 3 f
letters.forEach((letter, index) => console.log(letter, index));


Kode fra codesandbox: 
// Vanlige løkker
const baseArray = Array.from("hiof"); // lager en array med ['h','i','o','f']

for (let i = 0; i < baseArray.length; i += 1) {
  console.log(baseArray[i]); // h, i, o, f
}

// For-of

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
};

const baseArray2 = ["1", "2", , "4"];

// får ut selve verdien i en liste
for (const value of baseArray2) {
  console.log(value); // 1, 2, undefined, 4
}

// array.entries() gjør at vi kan hente ut index og verdien for en liste
for (const [index, value] of baseArray2.entries()) {
  console.log(index, value); // 0 '1', 1 '2', 2 undefined, 3 '4'
}

// Object.entries(obj) gir oss "nøkkelen" og verdien i objektet
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value); // prop1 value1, prop2 value2, prop3 value3
}

// forEach

// uten index
baseArray.forEach((value) => console.log(value)); // h, i, o, f

// med index
baseArray.forEach((value, index) => console.log(value, index)); // 0 h, 1 i, 2 o, 3 f


Dokumentasjon:
MDN forEach:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

MDN for-of:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

MDN Object.entries():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

MDN Object:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object