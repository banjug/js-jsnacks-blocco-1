const firstWord = prompt("Inserisci la prima parola.");
const secondWord = prompt("Inserisci la seconda parola.");

console.log("La prima parola è: " + firstWord);
console.log("La seconda parola è: " + secondWord);

if (firstWord.length == secondWord.length) {
    console.log("Le due parole hanno la stessa lunghezza");
} else if (firstWord.length > secondWord.length) {
    console.log("La parola più corta è: " + secondWord + ", la parola più lunga è: " + firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log("La parola più corta è: " + firstWord + ", la parola più lunga è: " + secondWord);
}