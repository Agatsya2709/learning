let firstcard=getRandomCard();
let secondcard=getRandomCard();
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message="";
let messageEl=document.getElementById("message");
let sumEl=document.getElementById("sum");
let cardsEl=document.getElementById("cards");
//let sumEl=document.querySelector("#sum");
function startGame(){
    renderGame();
}
function getRandomCard(){
    let randomnumber=Math.floor(Math.random()*13)+1;
    return randomnumber;
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

for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=" "+cards[i];
}
}
function newCard(){
   let newcard=getRandomCard();
    sum+=newcard;
    cards.push(newcard);
    cardsEl.textContent="";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=" "+cards[i];
    }   
    sumEl.textContent="Sum: "+sum;
    renderGame();
    
}