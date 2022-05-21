//Mål: - Kjenne til ulike måter å bruke import - Kjenne til ulike måter å bruke eksport

Innholdsfortegnelse:
1. Export
2. Import

Import og export:

Import og export bruker vi for å:
- Forhindre duplikasjon av kode (gjenbruk)
- Immutabilitet (at koden ikke er påvirket av tidligere bruk)
- Lesbarhet

Vi bruker dem ved å "eksportere" kode fra en fil filNavn.js og deretter "importere" den i en annen fil annenFil.js.

Export:

Før vi kan importere kode må den eksporteres. Det finnes ulike måter å eksportere koden på som påvirker hvordan vi kan importere den.

Default export:

Når vi bruker default export kan vi importere koden som hva vi vil.

// default export => kan importeres som hvaDuVil 
// (import jegErKreativ from './file.js')

// #file.js
const calculate = (a, b) => {return a + b}

export default calculate

// #file2.js
import jegErKreativ from './file.js'

console.log(jegErKreativ("test")) // test

Named export:

Named exports (alt annet enn export default) gjør at vi må ref til navnet som ble brukt.

// named export => må importeres som import { add } from './file.js'

// #file.js
export function add(a, b) { return a + b}
export let leet = 1337;
export const studentId = {id: 1};

// #file2.js
// må bruke samme navn som brukt under eksport (add, leet og studentId)
import {add, leet, studentId} from './file.js'

console.log(leet) // 1337

Import:

Default import:

Default import krever default export

// #file.js

const add = (x, y) => return x + y
export default add

// #file2.js

import myFancyAddName from './file.js'

console.log(myFancyAddName(1,2)) // 3

Named import:

Named imports som følge av named exports

// #file.js

const add = (x, y) => return x + y
export add

// #file2.js

import { add } from './file.js'

console.log(add(1,2)) // 3

Import all:

// #file.js

function add(a, b) {return a + b }
function multiply(a, b) {return a * b }
function subtract(a, b) {return a - b }
function divide(a, b) {return val1 / b }

// exporterer alle i en export istedenfor en og en
export {add, multiply, subtract, divide}; 

// #file2.js
import * as calc from './file.js' // importerer alle og gir dem en 'prefix'
import { add } from './file.js' // importerer kun en named export

console.log(calc.add(1,2)) // 3
console.log(add(1,2)) // 3
console.log(divide(1,2)) // Error => finner den ikke da den ikke er importert


Dokumentasjon:
MDN Import:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

MDN Export:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export