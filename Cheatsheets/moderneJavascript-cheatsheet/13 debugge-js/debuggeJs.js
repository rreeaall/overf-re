//Mål: - Kjenne til hvordan bruke console - Kjenne til hvordan bruke network tab


Debugge kode er viktig for å finne frem til hva og hvorfor noe feiler. Jeg anbefaler å se videoen for denne delen da den gjør det lettere å forstå hva som skjer i koden nedenfor.

Mye av dagen som en utvikler går til å debugge, og for å få best mulig utbytte av debuggingen er det noen verktøy som er hensiktsmessig å kjenne til.


// console metoder, kanskje den vanligste måten

const log = 'logging';
const error = 'error';
const warn = 'warning';
const friends = [
  { name: 'Kåre', age: 22 },
  { name: 'Truls', age: 32 },
  { name: 'Lars', age: 44 },
];
console.log(log); // vanlig log
console.error(error); // gir rød varsel i chrome
console.warn(warn); // gir gul varsle med varseltrekant
console.table(friends); // gir en tabell

friends.forEach((value) => {

  // Samler et set av verdier inne i en "collapsed" 
  // gruppe med value.name som gruppenavnet

  console.groupCollapsed(value.name);
  console.log(value.name);
  console.log(value.age);
  console.log('Done');
  console.groupEnd(value.name);
});

function willFail() {
  notFoundFunction();
  return 'Failed';
}

// willFail(); // se på stacktracen i Developer tools. 
// Kan også følge den til funksjonen som failer

function sumFriendsAge() {
  // debugger;
  return friends.reduce((sum, person) => sum + person.age, 0);
}

// sette breakpoint (eller debugger) på linje 39 i 
// chrome devtools for å se hvordan verdien endrer seg
sumFriendsAge(); 

/**
 *
 * Network tab => se hva som laster, responsen, requesten, payload, filtype +++
 * 
 * Break on attribute modifications => hvis noe JavaScript trigger 
 * en endring på attributten til elementet får vi sett hvilket script som kjører
 * 
 * Kan også sette breakpoints på ulike events (xhr, click ++) og 
 * få chrome til å stoppe når noen av de eventene trigges
 *
 */
