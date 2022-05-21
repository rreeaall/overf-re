//Mål: - Kjenne til hvordan lage dynamiske strenger - Kjenne til hvordan skrive ut strenger over flere linjer

Template strings (literals) gjør det enklere å lage dynamiske tekst-strenger. Vi bruker såkalte backticks til å lage strengen istedenfor vanlig fnutter ('', ""). Mellom `` kan vi skrive vanlig tekst, trigge funksjoner, bruke variabler m.m.

Formen på denne er:

const javaScript = "JavaScript";
const moreJavaScript = () => 2 + 2;

const myString = `String ${javaScript} og resultat ${moreJavaScript()}`;

// String JavaScript og resultat 4
console.log(myString)

const name = 'EcmaScript';
const version = 2015;
const hi = () => 'sier hei!';
const result = `Går over to linjer:
${name} ${version + 1} ${hi()}`;

console.log(result);

/* 
Går over to linjer:
EcmaScript 2016 sier hei! 
*/

Dokumentasjon:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals