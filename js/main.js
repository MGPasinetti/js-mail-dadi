// MAIL
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Bonus:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.


// MAIL
let arrMails = [
    "name@mail.com",
    "name1@mail.com",
    "name2@mail.com",
    "name3@mail.com",
    "name4@mail.com",
    "name5@mail.com",
    "name6@mail.com",
    "name7@mail.com",
    "name8@mail.com",
    "name9@mail.com"
];

const inputMail = document.querySelector(`#mail`)
const btnPlay = document.querySelector(`#play`);
const eleOutput = document.querySelector(`.output`)


btnPlay.addEventListener(`click`, function () {
    const mailSearch = inputMail.value;
    inputMail.value = ``;

    let found = false;

    for (let index = 0; index < arrMails.length; index++) {
        if (arrMails[index].toLocaleLowerCase() === mailSearch.toLocaleLowerCase()) {
            found = true;
        }
    }

    let msg = `Non puoi giocare`;
    if (found) {
        let numComputer = Math.floor(Math.random() * (6)) + 1;
        let numUser = Math.floor(Math.random() * (6)) + 1;
        console.log(numComputer, numUser);

        if (numComputer > numUser) {
            msg = `Hai vinto il computer!`;
        } else if (numComputer < numUser) {
            msg = `Hai perso`;
        } else {
            msg = `Pareggio`;
        }
    };

    eleOutput.innerHTML = msg
})










