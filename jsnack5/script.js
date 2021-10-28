let numberList = [];

for (let i = 0; i < 6; i++) {
    const userNum = parseInt(prompt("Inserisci un numero."));
    if (userNum % 2 == !0) {
        numberList.push(userNum);
    }

    console.log(numberList);
}

console.log("I numeri dispari che hai inserito sono: " + numberList);
