/*Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


(BONUS E SUPERBONUS DA FARE SOLO SE SI e' TERMINATO L'ESERCIZIO BASE)
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPERBONUS 1: Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
SUPERBONUS2: Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
SUPERBONUS 3: Visualizzare un messaggio di vittoria se non si clicca su nessuna bomba
Consigli del giorno:
 :party_wizard: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.
Lo screenshot fa riferimento al super bonus*/


// 1- visualizzare l'elemento al click del bottone
const play = document.querySelector('.play');

play.addEventListener('click', function(){
    let row_cell;
    let option = document.getElementById("select");
    row_cell = parseInt( option.value );
    document.querySelector('.grid').innerHTML = "";
    switch (row_cell) {
        case 10 :
            console.log('hai scelto il livello 1');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        case 9 :
            console.log('hai scelto il livello 2');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        case 7 :
            console.log('hai scelto il livello 3');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        default:
            alert('seleziona il livello di difficoltà');
    }

// 3- cliccando sulle celle si colorano e compare il numero in console

let grid = document.getElementById('field');

for(let i=0; i < row_cell * row_cell; i++){
    const currentSquare = createGridSquare(i+1, row_cell);
    currentSquare.addEventListener('click', function(){
        this.classList.toggle('blue');
        console.log(this.innerText)
    });
    grid.appendChild(currentSquare);
}
})

// 2- creare la griglia 10x10 

function createGridSquare(number, row_cell){
  const currentElement = document.createElement ('div'); 
  currentElement.classList.add('box');
  let sideLength = `calc(100% / ${row_cell})`;
  currentElement.style.width = sideLength;
  currentElement.style.height = sideLength;
  currentElement.innerText = number;
  return currentElement;
}