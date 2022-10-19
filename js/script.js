//inserisci il tuo nome//
const firstName=prompt ( "Inserisci il tuo nome");
console.log (firstName);
//Inserisci il tuo cognome//
const lastName=prompt ("Inserisci il tuo cognome");
console.log (lastName);
//Inserisci il tuo colore preferito//
const favoriteColor=prompt("Iserisci il tuo colore preferito");
console.log (favoriteColor);
//Inserisci le variabili più il #76//
const classAccount= `${firstName} ${lastName} ${favoriteColor} 76`
console.log (classAccount);
//Stampa sul foglio html del browser//
document.getElementById("class-account").innerHTML=classAccount;