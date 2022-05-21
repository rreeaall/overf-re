//Mål: - Kjenne til destructuring av lister - Kjenne til destructuring av objekter

Destructuring - bryte ned lister og objekter.

Innholdsfortegnelse:
1. Destructuring av lister
2. Destructuring av objekter

'spread' og 'destructuring' brukes for å øke lesbarheten samt forenkle koden og brukes mye i moderne JavaScript. Når vi snakker om destructuring skiller vi mellom destructuring av lister og destructuring av objekter.

Hovedforskjellen er at destructuring av lister krever at vi må være tro mot rekkefølgen i listen. Se eksempel nedenfor.

Destructuring lister:

// Basis => deconstructing array (beholder rekkefølgen)

 const data = [1, 2, 3];

// Før
const oldValue1 = data[0];
const oldValue2 = data[1];
const oldValue3 = data[2];

// Nå (hver verdi nedenfor ref til index 0,1,2 i variabelen data)
// Vi henter ut og knytter verdiene i listen til en ny variabel
const [one, two, three] = data;
console.log(one, two, three); // 1,2,3

Rekkefølgen er viktig:

Når vi returnerer noe fra en funksjon og deconstructer den med array destructuring ivaretas rekkefølgen. Når vi returnerte verdiene [x, y] beholdes rekkefølgen [x, y] når vi henter de ut.

// Eksempel som viser at rekkefølgen er viktig

const pizzaAndBurgers = () => {
  const pizzas = 2;
  const burgers = 4;
  return [pizzas, burgers];
};

// Her ser vi at burgers = 2 da første verdien vi returnerer er pizzas = 2.
// Selv om vi har byttet plass her
const [burgers, pizzas] = pizzaAndBurgers();
console.log(burgers, pizzas); // 2 4

Bruk av default verdier (lite brukt):

Her ser vi at second blir data2 verdien da de andre verdiene har en default verdi allerede.

// Basis med default verdier

 const data = [2];
 const [first=1, second, third=3] = data;
 console.log(first, second, third) // 1,2,3

Med spread:

leftOvers blir navnet på variabelen for alle verdiene som er igjen etter at vi har hentet ut "id". I dette tilfelle blir data[0] id, mens alle de andre blir til en liste med verdier (leftOvers).

// Med SPREAD
const data = [1,2,3,4,5];
// id = index 0 i data. Alle de andre blir en egen liste
const [id, ...ids] = data;
console.log(id, ids); // 1, [2,3,4,5]

// id = index 0 (1) og id2 = index 1 (2). Alle de andre blir en egen liste
const [id, id2, ...ids] = data;
console.log(id, id2, ids); // 1, 2, [3,4,5]

Ignorere verdier når vi bruker spread:

Vi kan hoppe over verdier når vi skal hente ut restene fra en liste.

// Ignorere verdier
const data = [1, 2, 3, 4];
const [first, , ...numbers] = data;
console.log(first, numbers); // 1, [3,4]

Hente verdier fra liste inne i liste (nesting):

Vi hente verdier fra lister inne i lister på samme måte. Vi gjør det ved å bruke [] rundt de listeverdiene som er inne i hovedlisten.

// Nesting
const data = [1, [2, 3]];
const [first, [second, third]] = data;
console.log(first, second, third); // 1,2,3


Lenke fra codesandbox i tilfelle må slette det under: https://codesandbox.io/s/destructuring-assignment-array-evjlf?from-embed
Kode fra codesandbox:
// Basis => deconstructing array (beholder rekkefølgen)

const data = [1, 2, 3];

// Før
const oldValue1 = data[0];
const oldValue2 = data[1];
const oldValue3 = data[2];

// Nå
const [value1, value2, value3] = data;
console.log(value1, value2, value3); // 1,2,3

// Eksempel som viser at rekkefølgen er viktig

const myFunction = () => {
  const x = 2;
  const y = 4;
  return [x, y];
};

// Her ser vi at y = 2 mens vi opprinnelig vil at den skal være 4
const [y, x] = myFunction();
console.log(y, x); // 2 4

// Basis med default verdier

const data2 = [2];
const [first = 1, second, third = 3] = data2;
console.log(first, second, third); // 1,2,3

// Med SPREAD
const data3 = [1, 2, 3, 4, 5];
const [id, ...data3spread] = data3;
console.log(id, data3spread); // 1, [2,3,4,5]

const [otherId, id2, ...data3spreadTwo] = data3;
console.log(otherId, id2, data3spreadTwo); // 1, 2, [3,4,5]

// Ignorere verdier
const data4 = [1, 2, 3, 4];
const [first3, , ...data4spread] = data4;
console.log(first3, data4spread); // 1, [3,4]

// Nesting
const data5 = [1, [2, 3]];
const [first4, [second2, third2]] = data5;
console.log(first4, second2, third2); // 1,2,3

ny


Destructuring objekter:

Fordelen med objekter er at rekkefølgen ikke er viktig slik det er med lister. Se eksempel nedenfor.

const students = {
  lars: 17,
  morten: 12,
  trude: 45
};

// Før
const oldLars = students["lars"];
const oldMorten = students["morten"];
const oldTrude = students["trude"];

// Nå
// trude peker på nøkkelen trude i obj, morten peker på morten og lars peker på lars
const { trude, morten, lars } = obj; // må matche navnet på "nøklene" men ikke rekkefølgen
console.log(trude, morgen, lars); // 45, 12, 17 (trude = 45 selv om vi henter den ut først)

Rekkefølgen ikke viktig:

// Eksempel som viser at rekkefølgen ikke er viktig

const myFunction = () => {
    const x = 2;
    const y = 4;
    return {y, x};
  };
  
  // Her ser vi at y = 4 selv om vi tar imot verdiene i en annen rekkefølge
  const { x, y } = myFunction();
  console.log(x, y); // 2 4
  
  Bruk av default verdier:

  I eksempelet nedenfor ser vi at c2 verdien bruker default verdien mens b2 blir overstyrt da den har en verdi fra før.

// Object deconstructing => default verdier

const students = {
  lars: 17,
  morten: 12,
};

const { lars, morten = 22, trude = 45 } = students;
console.log(lars, morten, trude); // 1, 12, 56

Med spread:

Som med lister kan vi hente ut "restene" fra et objekt og knytte de til en ny variabel. Den nye variabelen leftOvers blir da et objekt med de verdiene som er igjen.

// Object deconstruction med spread

const students = {
  lars: 17,
  morten: 12,
  trude: 56
};

const { lars, ...otherStudents } = students;
console.log(lars, otherStudents); // 1, {morten: 12, trude: 56}

Endre navn på en key:

Når vi deconstructer flere objekter så hender det at de inneholder samme nøkler (key). Da blir vi nødt til å rename navnet på nøkkelen ellers får vi duplikater og koden feiler.

// Object deconstruction => Rename

const students = {
  lars: 17,
  morten: 12,
  trude: 56
};

const anotherStudentList = {
  lars: 12,
  ali: 55
};

const { lars, morten, trude } = students;

// Når vi prøver å hente ut lars en gang til feiler koden 
// da vi allerede har hentet ut lars fra et annet objekt
// const { lars, ali: renameAli } = anotherStudentList; // => ERROR

// vi må "rename" lars
const { lars: larsTwin, ali: renameAli } = anotherStudentList;

// Opprinnelig ali i anotherStudentList vil ikke være tilgjengelig 
// lengre når vi har renamet den
console.log(larsTwin, renameAli, ali); // Error: ali is not defined 

Med nesting:

Vi kan også hente ut objekter som bor inne i objekter. I første eksempel henter jeg ut v1 verdien ved hjelp av c: { v1 }.

I eksempelet som er kommentert ut henter jeg ut hele c objektet ved hjelp av ...c

// Object deconstruction => Nesting

const obj = {
  a: 1,
  b: 2,
  c: {
    v1: "c-one",
    v2: "c-two"
  }
};

const {
  a,
  b,
  c: { v1 }
} = obj;
console.log(a, b, v1); // 1, 2, 'c-one'

// const { a, b, ...c } = obj;
// console.log(a, b, c) // 1, 2, {v1: 'c-one', v2: 'c-two'}

Deconstructing av parametre i funksjoner:

Å deconstructe parametere i en funksjon er vanlig praksis i React. Måten det fungerer på er at vi 'henter ut' nøkkelene direkte.

// Deconstruct params => function

// Her tar vi i mot objektet og henter ut nøklene (key) etterpå
function getStudentInfo(student) {
  console.log(student.name); // Marius Wallin
  console.log(student.age); // 35
}

// Her henter vi ut nøklene (key) direkte. Gir også default verdi til age
function getStudentInfo({ name, age = 99 }) {
  console.log(name); // Marius Wallin
  console.log(age); // 35
}

// Kaller på funksjonen og sender inn et objekt med nøklene name og age
getStudentInfo({ name: "Marius Wallin", age: 35 });

kode fra codesandbox:
https://codesandbox.io/s/destructuring-assignment-object-nb60b?from-embed


dokumentasjon: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment