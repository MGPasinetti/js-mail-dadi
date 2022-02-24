// MAIL
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Bonus:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.


// Creo una lista di mail
let arrMails = ["name@mail.com", "name1@mail.com", "name2@mail.com", "name3@mail.com", "name4@mail.com", "name5@mail.com", "name6@mail.com", "name7@mail.com", "name8@mail.com", "name9@mail.com"];

// Chiedo all'utente la sua mail
const userMail = document.querySelector(".btn-login");

let found = false;

// La mail si trova nella lista?
for (let index = 0; index < arrMails.length; index++) {
    if (arrMails[index] === userMail) {
        found = true;
    }
}

if (found) {
    console.log("Mail trovata");
} else {
    console.log("Mail non trovata");
}



