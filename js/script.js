/*
**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*/

// dichiaro gli elementi del DOM

const btn = document.querySelector('.btn');
const row = document.querySelector('.row-square');
let diff;
let validator;
// dichiaro le variabili globali





//eventListner al bottone di avvio
btn.addEventListener('click', function(){
  let validator = false;
  
  if(validator===false){
    init();
    validator=true;
  }else{
    row.innerHTML="";
    init()
    validator=false;
  }
})

// creo le funzioni
//1- creo una funziona che inizializza tutte le altre
function init(){
  createSquare(diff);
}

//2-Funzione Genero i quadrati in base alla difficoltà selezionata 
function createSquare(difficult){
  diff = document.getElementById('diff').value;
  if(diff === "diff-1"){
    diff = Math.pow(10,2);
  }else if(diff === "diff-2"){
    diff =Math.pow(9,2);
  }else{
    diff = Math.pow(7,2);
  }
  for (let i = 0; i < difficult ; i++){
    let square = document.createElement('div')
    square.classList.add('square');
    square.innerHTML = [i+1];
    row.append(square);
    square.style.width = squareSize();
    square.style.height = squareSize();
    square.addEventListener('click', thisCell)
  }
}
 console.log(diff);
//3-Funzione per calcolare la grandezza dei quadrati
function squareSize(){
  console.log(diff);
  return `calc(100% / ${ Math.sqrt(diff)})`;
}

//4 Funzione per Colorare le celle al click e restituire un valore numerico
function thisCell(){
  this.classList.add('blue');
  console.log(this.innerHTML)
}



