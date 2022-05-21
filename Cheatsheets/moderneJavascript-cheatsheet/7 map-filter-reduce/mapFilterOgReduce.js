//Mål: - Kjenne til hvordan map virker og hvorfor bruke map - Kjenne til hvordan filter virker og hvorfor bruke filter - Kjenne til hvordan reduce virker og hvorfor bruke reduce

Innholdsfortegnelse:
1. Filter
2. Map
3. Reduce
4. Video

Filter, map og reduce virker som løkker, men i tillegg til å gå over verdiene kan vi gjøre endringer på dem.

Filter brukes til å hente ut et utvalg fra en liste. Map bruker vi når vi ønsker å gjøre endringer på verdiene i lista. Reduce bruker vi når vi ønsker å slå sammen, kombinere, redusere ++ verdier i en liste. Reduce bruker vi til aggregering av data.

Filter:

Filter brukes når vi ønsker et utvalg fra en liste. Vi tar utgangspunkt i en "gammel" liste og bruker denne til å lage en ny liste som oppfyller betingelsene våre. I eksempelet nedenfor får vi en ny liste tilbake hvor alle verdier er større enn 2.

Hovedformen for filter er:

const numbers = [1, 2, 3, 4];
const filteredArray = numbers.filter((number) => number > 2);
console.log(filteredArray); // [3, 4]

Union, intersection, difference:

Ved bruk av filter kan vi bedre analysere listene våre for å finne det som er unikt, felles m.m

// Intersection (hva er felles)
const numberList = [1, 2, 3, 4];
const anotherNumberList = [2, 4, 5, 6];

let intersection = numberList.filter((number) => anotherNumberList.includes(number));

console.log(intersection); // [2, 4]

// Difference (hva er i den ene og ikke i den andre)
let difference = numberList.filter((number) => !arr2.includes(number));

console.log(difference); // [1, 3]

// Unique values (hvilke verdier er ikke felles)
let notSharedValues = numberList
  .filter((number) => !anotherNumberList.includes(number))
  .concat(anotherNumberList.filter((anotherNumber) => !anotherNumberList.includes(anotherNumber)));

console.log(notSharedValues); // [1, 3, 5, 6]

// Union (kombinere listene)
let union = [...numberList, ...anotherNumberList];
let uniqueUnion = [...new Set([...numberList, ...anotherNumberList])];

console.log(union); // [1, 2, 3, 4, 2, 4, 5, 6]
console.log(uniqueUnion); // [1, 2, 3, 4, 5, 6]

Every og Some:

I tillegg til filter kan vi bruke array.every() eller array.some(). De fungerer som filter, men returnerer en boolean (true / false).
(Link til array.every(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
(link til array.some(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

- .every() sjekker om alle verdiene i en liste oppfyller kravet
- .some() sjekker om noen av verdiene oppfyller kravet

kodeeksempel fra codesandbox:
https://codesandbox.io/s/filter-kjtow?from-embed


Map: 
Map brukes til å kopiere en liste og samtidig gjøre endringer på verdiene i listen. I eksempelet nedenfor har vi en liste med priser som vi bruker til å lage en liste med moms (pris + 25%).

Map fungerer som for-of hvor en og en verdi blir tilgjengelig når vi går igjennom listen. Vi kan da gjøre endringer på verdien og få en helt ny liste tilbake.

const cart = [100, 10, 25, 200];

// Før
function cartNormal() {
  let cartWithMva = [];
  for (let i = 0; i < cart.length; i++) {
    cartWithMva.push(cart[i] * 1.25);
  }
  return cartWithMva;
}

console.log(cartNormal()) // [125, 12.5, 31.25, 250]

// Med map
const calcMva = cart.map((price) => price * 1.25);

console.log(calcMva) // [125, 12.5, 31.25, 250]

Vi kan trigge en funksjon direkte når vi bruker map. Den "vet" om parameterne som kommer inn.

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

let capitalized = ["marius", "trude"].map(capitalize); 
console.log(capitalized) // ['Marius', 'Trude']

I et litt større eksempel hvor vi skal regne ut kaloriene per porsjon kunne det sett slik ut:

const plates = [
  {
    name: "Frokost",
    foods: [
      {
        name: "Brødskiver",
        calories: "45"
      },
      {
        name: "Melk",
        calories: "45"
      },
      {
        name: "Pålegg",
        calories: "45"
      }
    ]
  },
  {
    name: "Middag",
    foods: [
      {
        name: "Fisk",
        calories: "145"
      },
      {
        name: "Poteter",
        calories: "245"
      },
      {
        name: "Grønnsaker",
        calories: "45"
      }
    ]
  }
];

const calories = (plate) => {
  let caloriesTotal = 0;
  plate.foods.forEach((food) => {
    caloriesTotal = caloriesTotal + parseInt(food.calories, 10);
  });
  let foodTypes = plate.foods.map((food) => food.name).join(", ");
  return {
    name: `${plate.name} (${foodTypes}) - ${caloriesTotal}kcal`
  };
};

// [
//  {"name":"Frokost (Brødskiver, Melk, Pålegg) - 135kcal"},
//  {"name":"Middag (Fisk, Poteter, Grønnsaker) - 435kcal"}
// ]
console.log(plates.map((plate) => calories(plate)));

// [
//  {"name":"Frokost (Brødskiver, Melk, Pålegg) - 135kcal"},
//  {"name":"Middag (Fisk, Poteter, Grønnsaker) - 435kcal"}
// ]
console.log(plates.map(calories));

Kodeeksempel fra codesandbox: https://codesandbox.io/s/array-map-fe0ss?from-embed


Reduce:

avansert;

Reduce bruker vi når vi ønsker å slå sammen verdier, redusere eller kombinere et sett av verdier til f.eks en sum. Denne er mer avansert og ikke noe jeg bruker alt for ofte.

Reduce sin standard form er:

/**
 * sum => verdien som aggregeres (du har med deg hele tiden)
 * current => verdien du jobber med nå
 * index => optional. Viser indexen
 *
 * Viktig å tenke på er startverdien. 
 * Hvis ingen startverdi settes så blir det ingen index 0
 *
 */

 const list = [1, 2, 3];

 const reducer = list.reduce((sum, current, index) => {
   // do magic
   return sum + current;
 }, startVerdi);
 
 I eksempelet nedenfor regner vi ut summen i en liste med tallene 2, 4 og 8. Under koden ser du hva som skjer hver runde (hver iterasjon). Reduce fungerer som en løkke hvor vi steg for steg går igjennom verdiene i listen.
 
 function showMeTheNumbers(total, current, index) {
   console.log(`\n------------- RUNDE ${index} -------------\n`);
   if (index === 0) {
     console.log(`Startverdien for total er: ${total}`);
   }
   console.log(`Verdien du jobber med nå er: ${current}`);
   console.log(`Totalen du jobber med nå er: ${total}`);
   return total + current;
 }
 
 const startValue = 0;
 
 let total = [2, 4, 8].reduce(showMeTheNumbers, startValue);
 console.log(total); // 14
 
 /** 
 
 ------------- RUNDE 0 -------------
 Startverdien for total er: 0 
 Verdien du jobber med nå er: 2 
 Totalen du jobber med nå er: 0 
 
 ------------- RUNDE 1 -------------
 Verdien du jobber med nå er: 4 
 Totalen du jobber med nå er: 2 
 
 ------------- RUNDE 2 -------------
 Verdien du jobber med nå er: 8 
 Totalen du jobber med nå er: 6 
 
  */
 
 I et større eksempel kan vi f.eks finne ut hvor mange ganger et tall har blitt duplisert. I eksempelet vises ulike måter vi kan redusere antall kodelinjer. En viktig ting å tenke på når vi komprimerer koden er lesbarhet.
 
 Personlig synes jeg det å komprimere går utover lesbarheten og gjør det vanskeligere å forstå hva som skjer.
 
 
 const countDuplicates = (objectHoldingDuplicates, current) => {
   // Kortversjon: Ser om verdien finnes i objektet og 
   // øker med 1 om den finnes
   objectHoldingDuplicates[current] = objectHoldingDuplicates[current] + 1 || 1;
   
   // Langversjon:
   // if(objectHoldingDuplicates[current]) {
   //     objectHoldingDuplicates[current] += 1;
   // } else {
   //     objectHoldingDuplicates[current] = 1;
   // }
   
   // returnerer oppdatert objekt
   return objectHoldingDuplicates;
 };
 
 const duplicatesOnly = (entry) => entry[1] > 1;
 
 const duplicatesOnlyLong = (entry) => {
   let [, value] = entry;
   // let key = entry[0]
   // let value = entry[1]
   if (value > 1) {
     return entry;
   }
 };
 
 const obj2 = [1, 2, 1, 1, 4, 5, 6, 6, 1];
 
 // Legg merke til her at startverdien er et tomt object {}
 let countedValues = Object.entries(obj2.reduce(countDuplicates, {}));
 let duplicates = countedValues.filter(duplicatesOnly);
 duplicates.forEach((duplicate) =>
   console.log(`Verdien ${duplicate[0]} ble duplisert ${duplicate[1]} ganger`)
 );
 
 // Verdien 1 ble duplisert 4 ganger
 // Verdien 6 ble duplisert 2 ganger

 kodeeksempel fra codesandbox: https://codesandbox.io/s/reduce-dlf9n?from-embed

 Dokumentasjon
MDN Filter:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

MDN Map: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

MDN Reduce:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce