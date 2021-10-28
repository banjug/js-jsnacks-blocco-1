// const firstNum = parseInt(prompt("Inserisci il primo numero."));
// const secondNum = parseInt(prompt("Inserisci il secondo numero."));

// console.log("Il primo numero è: " + firstNum);
// console.log("Il secondo numero è: " + secondNum);

// const numberSum = firstNum + secondNum;
// console.log("La somma dei numeri è: " + numberSum);



const sumButton = document.getElementById("sumBtn");
const sumCont = document.getElementById("container");

sumButton.addEventListener('click', 
function() {

        let firstNum = parseInt(document.getElementById("numb1").value);
        let secondNum = parseInt(document.getElementById("numb2").value);
        let numberSum = firstNum + secondNum;        
        sumCont.innerHTML = `La somma dei due numeri è ${numberSum}`;
        console.log(numberSum);
    }
    
);
