let numberList = [];

// salvo i numeri inseriti in un array 
for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Inserisci un numero."));
    numberList.push(number);
    console.log(numberList);
}

// scorro l'array a partire dal primo numero e lo sommo con ogni numero seguente
let numberSum = parseInt(numberList[0]);
for (let i = 1; i < numberList.length; i++) {
    numberSum = numberSum + numberList[i];
}

console.log("La somma dei numeri inseriti è: " + numberSum);