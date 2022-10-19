//inserisci il tuo nome//
const firstName=prompt ( "Inserisci il tuo nome");
console.log (firstName);
//inserisci il tuo nome//

//Inserisci il tuo cognome//
const lastName=prompt ("Inserisci il tuo cognome");
console.log (lastName);
//Inserisci il tuo cognome//

//Inserisci il tuo colore preferito//
const favoriteColor=prompt("Iserisci il tuo colore preferito");
console.log (favoriteColor);
//Inserisci il tuo colore preferito//

//Inserisci le variabili più il #76//
const classAccount= `${firstName} ${lastName} ${favoriteColor} 76`;
console.log (classAccount);
//Inserisci le variabili più il #76//

//Stampa sul foglio html del browser//
document.getElementById("class-account").innerHTML=classAccount;
console.log (classAccount);
//Stampa sul foglio html del browser//
