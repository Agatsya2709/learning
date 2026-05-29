let firstcard=15
let secondcard=6
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message="";
let messageEl=document.getElementById("message");
let sumEl=document.getElementById("sum");
let cardsEl=document.getElementById("cards");
//let sumEl=document.querySelector("#sum");
function startgame(){
    renderGame();
}
function renderGame(){
    if(sum<=20){
        message="Do you want to draw a new card?";
}
    else if(sum===21){
         message="Wohoo! You've got Blackjack!";
        hasblackjack=true;
}
else{
    message="You're out of the game!";
    isalive=false;
}
messageEl.textContent=message;
sumEl.textContent="Sum: "+sum;
cardsEl.textContent="Cards: "+cards.join(" ");}
function newCard(){
   let newcard=6;
    sum+=newcard;
    cards.push(newcard);
    cardsEl.textContent="Cards: "+cards.join(" ");
    sumEl.textContent="Sum: "+sum;
    renderGame();
    
}