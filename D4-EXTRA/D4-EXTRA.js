// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni 
 elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom(n) {
  let randomArr = [];
  for (let i = 0; i < n; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
  }
  return randomArr;
}
console.log(giveMeRandom(5));

const checkArray = function (randomCasualArr) {
  let numSum = 0;
  for (let i = 0; i < randomCasualArr.length; i++) {
    if (randomCasualArr[i] > 5) {
      console.log(randomCasualArr[i] + " maggiore di 5");
      numSum += randomCasualArr[i];
    } else {
      console.log(randomCasualArr[i] + " minore di 5");
    }
  }
  return numSum;
};
console.log(checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    Name: "Fumetto",
    Price: 5,
    Id: "FMA0310",
    Quantity: 3,
  },
  {
    Name: "Action Figure",
    Price: 35,
    Id: "ELR0610",
    Quantity: 2,
  },
  {
    Name: "Collection Cards Pack",
    Price: 3.5,
    Id: "MTG0131",
    Quantity: 4,
  },
];

const shoppingCartTotal = function (totalExp) {
  let totalCart = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    shoppingCart[i].Price * shoppingCart[i].Quantity;
    totalCart += shoppingCart[i].Price * shoppingCart[i].Quantity;
  }
  return totalCart;
};
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let addToShoppingCart = function (newCart) {};

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
  let max = shoppingCart[0];

  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > max.price) {
      max = shoppingCart[i];
    }
  }
  return max;
}
console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
  let counter = 0;
  while (counter < 3) {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > x) {
      console.log("Numero casuale maggiore di x:", randomNumber);
      counter++;
    } else {
      console.log("Numero casuale non maggiore di x:", randomNumber);
    }
  }
}
console.log(loopUntil(5));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
const array = [1, 2, 3];
function average(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      count++;
    }
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}
console.log(average(array));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
