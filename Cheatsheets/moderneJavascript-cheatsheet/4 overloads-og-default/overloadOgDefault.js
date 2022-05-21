// Mål: - Kjenne til hvordan JavaScript håndterer overskudd av parametere - Kjenne til hvordan sette default parametere i funksjoner

Overloads:

Begrepet overloads vil si at antallet parametere (argumenter) vi bruker i en funksjon ikke har noe å si. Fordelen med det er at vi ikke trenger å bruke alle parameterne og at koden ikke krasjer om vi sender inn flere parametere enn det som trengs.

// Overloads

function overloads(a, b) {
  console.log(a);
  console.log(b);
}

// a = 1, b = undefined da den ikke finnes
overloads(1);

// a = 1, b = 2, 3 & 4 = ignorert da de ikke finnes
overloads(1, 2, 3, 4);

Default parametre:

Vi kan ha default verdier på parameterne. Denne default verdien blir da brukt om vi ikke erstatter den med noe når vi bruker funksjonen.

// Default params

function def(ageOne = 11, ageTwo = "22") {
  console.log(ageOne);
  console.log(ageTwo);
}

def(); // ageOne = 11, ageTwo = '22'
def(undefined, 2); // ageOne = 11, ageTwo = 2 (bruker undefined til å hoppe over første verdi)

//def(,2) // syntax error

Named parametres:

Vi kan navngi parametere for å gjøre det mer spesifikt hva funksjonen forventer. Dette er noe som er vanlig å gjøre i React.

Kan f.eks kreve at parameterne som kommer inn heter password og email.

// Named

function named({ email, password }) {
  console.log(email);
  console.log(password);
}

// myemail@email.no 1234
named({ email: "myemail@email.no", password: "1234" });

// Eksempel som feiler
// named(); // error
// named(2, 3); // undefined
// named((x = 2), (z = 3)); // undefined
// named((email = 2), (password = 3)); // undefined
// named({2,3}); // error

Under ser du eksempel som feiler, da funksjonen forventer et objekt med email og password på denne formen { email: "myemail@email.no", password: "1234" }.

// named(); // error
// named(2, 3); // undefined
// named((x = 2), (z = 3)); // undefined
// named((email = 2), (password = 3)); // undefined
// named({2,3}); // error

Nytt eksempel med kode fra codesandbox:
// Overloads

function overloads(a, b) {
    console.log(a);
    console.log(b);
  }
  
  overloads(1); // a = 1, b = undefined da den ikke finnes
  overloads(1, 2, 3, 4); // a = 1, b = 2, 3 & 4 = ignorert da de ikke finnes
  
  // Default params
  
  function def(a = 11, b = "22") {
    console.log(a);
    console.log(b);
  }
  
  def(); // a = 11, b = '22'
  def(undefined, 2); // a = 11, b = 2 (bruker undefined til å hoppe over første verdi)
  //def(,2) // syntax error
  
  // Named
  
  function named({ email, password }) {
    console.log(email);
    console.log(password);
  }
  
  named({ email: "myemail@email.no", password: "1234" }); // myemail@email.no 1234
  
  // named(); // error
  // named(2, 3); // undefined
  // named((x = 2), (z = 3)); // undefined
  // named((email = 2), (password = 3)); // undefined
  // named({2,3}); // error
  


  Dokumentasjon:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters