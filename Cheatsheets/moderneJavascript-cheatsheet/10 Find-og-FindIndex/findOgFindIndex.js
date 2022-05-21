//Mål: - Kjenne til hvordan bruke find - Kjenne til hvordan bruke findIndex - Kjenne til hva som skiller find og findIndex

For å søke i lister eller objekter kan vi bruke 'find' og 'findIndex'. Tidligere har dere brukt:
- array.includes()
- array.indexOf()

FindIndex:

FindIndex returnerer:

    Første index hvis den finner det du leter
    Om flere verdier møter kravet får du kun den første indexen. Ønsker du å finne alle må man bruke filter.
    -1 om den ikke finner noe

const people = [
  {
    id: 1,
    name: "Stian"
  },
  {
    id: 2,
    name: "Marius"
  },
  {
    id: 3,
    name: "Stian"
  }
];

const stianIndex = people.findIndex((person) => person.name === "Stian");

// må kjenne til rekkefølgen for at dette skal virke
const secondStianIndex = people.findIndex(
  (person, index) => person.name === "Stian" && index > 1
);

console.log(stianIndex, secondStianIndex); // 0, 2

Find:

Find returnerer:

    Første verdi om den finner det du leter
    Om flere verdier møter kravet så får du kun den første. Ønsker du å finne alle må man bruke filter.
    undefined hvis ikke

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find((e) => e % 2 !== 0)); // første oddetall 1
console.log(numbers.reverse().find((e) => e % 2 !== 0)); // siste oddetall 5
console.log(people.find((person) => person.name === "Stian")); // {id: 1, name: 'Stian'}
console.log(
  people.find((person, index) => person.name === "Stian" && index > 1)
); // {id: 3, name: 'Stian'}



Kode fra codesandbox:
const people = [
    {
      id: 1,
      name: "Stian"
    },
    {
      id: 2,
      name: "Marius"
    },
    {
      id: 3,
      name: "Stian"
    }
  ];
  
  const stianIndex = people.findIndex((person) => person.name === "Stian");
  
  const secondStianIndex = people.findIndex(
    (person, index) => person.name === "Stian" && index > 1
  );
  
  console.log(stianIndex, secondStianIndex); // 0, 2
  
  let numbers = [1, 2, 3, 4, 5];
  
  console.log(numbers.find((e) => e % 2 !== 0)); // første oddetall 1
  console.log(numbers.reverse().find((e) => e % 2 !== 0)); // siste oddetall 5
  console.log(people.find((person) => person.name === "Stian")); // {id: 1, name: 'Stian'}
  console.log(
    people.find((person, index) => person.name === "Stian" && index > 1)
  ); // {id: 3, name: 'Stian'}
  

  Dokumentasjon:
  MDN Index Of:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

  MDN Find:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  MDN FindIndex:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex