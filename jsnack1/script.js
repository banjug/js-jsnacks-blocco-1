const sumButton = document.getElementById("sumBtn");
const numCont = document.getElementById("container");

sumButton.addEventListener('click', 
function() {

        let firstNum = parseInt(document.getElementById("numb1").value);
        let secondNum = parseInt(document.getElementById("numb2").value);
        if (firstNum > secondNum) {
            numCont.innerHTML = `Il numero maggiore è ${firstNum}`;
        } else if (firstNum < secondNum) {
            numCont.innerHTML = `Il numero maggiore è ${secondNum}`;
        } else {
            numCont.innerHTML = `I due numeri sono uguali`;
        }
    }
    
);
