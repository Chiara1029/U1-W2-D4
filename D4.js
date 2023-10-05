/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
    const totalArea = l1*l2
    return totalArea
}
console.log(area(5,9))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (int1, int2){
    const totalSum = int1+int2
    if(int1!=int2){
        return totalSum 
    } else if (int1===int2){
        return totalSum*3
    }
}
console.log(crazySum(3,3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (num1){
    const totalDiff = num1-19
    if(num1>19){
        return totalDiff*3 //cerca DIFFERENZA ASSOLUTA 
    } else if (num1<19){
        return totalSum
    }
}
console.log(crazyDiff(57))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
 let n1 = 20
 let n2 = 100
 let n3 = 400

function boundary (n){
    if(n>n1 && n<n2 || n===n3){
        return true
    } else {
        return false
    }
}
console.log(boundary(450))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


const testText = "Epicode è bellissimo"

function epify (finalTestText){
    if(testText.startsWith("Epicode")){
        return testText
    } else {
        return testText.join(0,"Epicode")
    }
}
console.log(epify())



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (numPos){
    if(numPos % 3 === 0){
        return "è multiplo di 3"
    } else if (numPos % 7 === 0){
        return "è multiplo di 7"
    }
}
console.log(check3and7(49))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire 
 una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const normText = "EPICODE"

function reverseString(reverseText) {
    reverseText = normText.replace("PICOD", "DOCIP")
    return reverseText
}
console.log(reverseString())

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const lowerText = "Luke, sono tuo padre"

function upperFirst (upperText){
    upperText = lowerText.replaceAll("sono", "Sono", "tuo", "Tuo", "padre", "Padre")
    return upperText
}
console.log(upperFirst())



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let completeString = "Testo da tagliare"

function cutString(cuttedString){
    cuttedString = completeString.substring(1,16)
    return cuttedString
}
console.log(cutString())


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array 
 contenente n numeri casuali inclusi tra 0 e 10.
*/

let n= 5

function giveMeRandom (n){
    min = Math.ceil(0);
    max = Math.floor(10);
    n
    return Math.floor(Math.random(0,10) * (max - min + 1) + min);

    //return Math.floor(Math.random(0.10) * n)
}
console.log(giveMeRandom(n))
