'use strict';

// FUNZIONE PER STABILIRE SE L'INPUT è PALINDROMO O MENO
// RESTITUISCE true SE LO è, ALTRIMENTI false

function palindromo(parola) {

  // CASO PAROLA CON NUMERO DI LETTERE PARI
  if (parola.length % 2 === 0) {
    // CICLO FOR PER CONFRONTARE LETTERE DELLA PAROLA, APPENA NE TROVA DUE DIVERSE ESCE DALLA FUNZIONE E DA false
    for (let i = 0; i < parola.length / 2; i++) {
      if (parola[i] !== parola[parola.length - i -1]) {
        return false;
      } 
    }
  }

  // UNICO CASO ALTERNATIVO CON NUMERO DI LETTERE DISPARI
  // CICLO FOR PER CONFRONTARE LETTERE DELLA PAROLA, APPENA NE TROVA DUE DIVERSE ESCE DALLA FUNZIONE E DA false
  for (let j = 0; j < Math.floor(parola.length / 2); j++) {
    if (parola[j] !== parola[parola.length - j -1]) {
      return false;
    } 
  }

  // SE I CONFRONTI SOPRA NON AVRANNO TROVATO LETTERE DIVERSE, LA PAROLA SARà PALINDROMA E RESTITUIREMO true
  return true;
}  



// INPUT PAROLA UTENTE
// CONTROLLO INSERIMENTO NUMERI O CARATTERI SPECIALI NON PRESENTE!
// toTrim() PER ELIMINARE GLI SPAZI BIANCHI INIZIO E FINE STRINGA
// toLowerCase() PER EVITARE CHE EVENTUALI MAIUSCOLE COMPROMETTANO IL RISULTATO DESIDERATO, IN QUANTO JS è CASE SENSITIVE
let parolaUser = prompt('Inserisci una parola').trim().toLowerCase();
console.log(`La parola inserita, eliminati spazi bianchi e maiuscole, è ${parolaUser}`);



// CICLO WHILE PER EVITARE CHE L'USER INSERISCA SOLO UNA LETTERA, CHE NON SAREBBE UNA PAROLA
while (parolaUser.length < 2) {
  alert('Inserisci una parola di almeno due lettere senza spazi');  
  parolaUser = prompt('Inserisci una parola').trim().toLowerCase();
}



// SALVO IN UNA VARIABILE COSTANTE QUELLO CHE LA FUNZIONE MI DA IN USCITA
const risultato = palindromo(parolaUser);



// IF STATEMENT PER DIRE ALL'USER E MOSTRARE IN CONSOLE SE LA PAROLA INSERITA è PALINDROMA O NO
if (risultato) {

  console.log(`${parolaUser} è Palindroma`);
  alert('La parola inserita è Palindroma');

} else {

  console.log(`${parolaUser} non è Palindroma`);
  alert('La parola inserita non è Palindroma');

}