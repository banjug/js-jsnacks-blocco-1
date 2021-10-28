// creo un Array
const numberList = [];

// ripeto fino ad avere 50 numeri nell' array
while (numberList.length < 50) {
    
    // genero un numero casuale
    const num = Math.floor(Math.random() * 50) + 1;
    
    // è uguale ad un altro numero?
    let duplicateNum = false;
    
        // controllo il nuovo numero generato con quelli presenti nell'array, se trovo un duplicato cambio il valore boolean
        for (i = 0; i < numberList.length; i ++) {
            if (num === numberList[i]) {
            duplicateNum = true;
            }
        }
    
    // se il valore boolean non cambia (numero non duplicato) lo aggiungo all array 
    if (duplicateNum == false) {
        numberList.push(num);
    }
}

// stampo il risultato
console.log("La lista di numeri casuali senza duplicati è: " + numberList);



