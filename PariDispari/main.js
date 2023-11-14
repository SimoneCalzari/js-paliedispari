'use strict';

// FUNZIONE CALCOLO NUMERO RANDOM TRA DUE NUMERI, ESTREMI COMPRESI
function randomTraNumeriCompresi(inf,sup) {
  const numRandom = inf + Math.floor(Math.random() * (sup - inf + 1));
  return numRandom;
}
// const numRandomCompreso = randomTraNumeriCompresi(1,5);
// console.log(numRandomCompreso);

// FUNZIONE CALCOLO NUMERO RANDOM TRA DUE NUMERI, ESTREMI ESCLUSI
function randomTraNumeriEsclusi(inf,sup) {
  let numRandom = inf + Math.floor(Math.random() * (sup - inf - 1)) + 1;
  return numRandom;
}
// const numRandomEscluso = randomTraNumeriEsclusi(1,5);
// console.log(numRandomEscluso);

// FUNZIONE CHE MI DA true SE IL NUMERO INSERITO è PARI, ALTRIMENTI MI DA false
function isNumPari(x) {
  if (x % 2 === 0){
    return true;
  }
  return false;
}

// CHIEDIAMO ALL'UTENTE DI INSERIRE PARI O DISPARI
let inputPariDispari = prompt('Inserisci pari o dispari').toLowerCase();
console.log('L user ha scelto', inputPariDispari);

// CICLO WHILE AFFINCHE L UTENTE INSERISCA ESCLUSIVAMENTE PARI O DISPARI
while (inputPariDispari !== 'pari' && inputPariDispari !== 'dispari') {
  alert('Inserire letteralmente "pari" o "dispari"');
  inputPariDispari = prompt('Inserisci pari o dispari').toLowerCase();
}

// NUMERO INPUT USER
const inputUser = Number(prompt('Inserisci un numero tra 1 e 5 compresi'));
console.log('Il numero dell user è', inputUser);

// NUMERO DEL COMPUTER
const inputPc = randomTraNumeriCompresi(1,5);
console.log('Il numero del computer è', inputPc);

// SOMMA DEI DUE NUMERI
const somma = inputUser + inputPc;
console.log('I due numeri sommati fanno', somma);

// VERIFICO SE LA SOMMA è PARI O DISPARI
const sommaIsPari = isNumPari(somma);
console.log('La somma è pari:', sommaIsPari);

// DICHIARIAMO CHI HA VINTO
if ((inputPariDispari === 'pari' && sommaIsPari) || (inputPariDispari === 'dispari' && !sommaIsPari) ) {
  alert('L USER HA VINTO');
  console.log('L USER HA VINTO');
} else {
  alert('IL COMPUTER HA VINTO');
  console.log('IL COMPUTER HA VINTO');
}


