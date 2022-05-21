//Mål: - Kjenne til hvordan forenkle objekter - Kjenne til hvordan forenkle funksjoner i objekter

Objekter kan skrives på en enklere måte enn tidligere. Ved å sette en variabel inn i et objekt, blir den automagisk tolket. Nøkkelen (key) tar navnet på variabelen mens verdien (value) blir selve verdien til variabelen.

Forenkle det å lage objekter:

// Før
const old = {
  age: 22
};

// Nå
const age = 22;

const objShorthandSimple = {
  age
};

// Med flere variabler
const name = "Lars";

const student = {
  age,
  name,
  lectures: 2
};

 // {age: 22, name: "Lars", lectures: 2}
console.log(student)

Forenkle bruk av funksjoner i objekter:

Vi kan forenkle hvordan vi bruker funksjoner i objekter. Vi kan bruke arrow funksjoner om ønskelig.

const obj = {
   oldGetAge: function (age) { return age },
   newGetAge(age) { return age},
   arrowGetAge: (age) => { return age}
 }

 Dokumentasjon: 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer