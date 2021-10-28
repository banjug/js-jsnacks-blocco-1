const guests = ["Chester Beckers", "The Leeches", "Bunsen", "Doctor Webster Civet", "The Hornbeams", "The Willie Voltaires", "The Backbuck Clan", "the Ismays", "the Chrysties", "Edgar Beaver", "Clarence Endive"];

console.log(guests);

const userName = prompt("Inserisci il tuo nome.")

let found = false;

for (let i = 0; i < guests.length; i++) {
    if (userName === guests[i]) {
        found = true;
    }
}

if (found === true) {
    console.log("Complimenti, sei sulla lista degli invitati. Benvenuto alla festa del signor Gatsby.");
} else {
    console.log("Mi dispiace, il suo nome non è nella lista degli invitati. Non posso farla entrare.");
}