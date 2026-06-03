let player={
    name:"agatsya",
    chips:145
}
let sum=0;
let cards=[];
let hasblackjack=false;
let isalive=true;
let message="";
let messageEl=document.getElementById("message");
let sumEl=document.getElementById("sum");
let cardsEl=document.getElementById("cards")
let playerEl=document.getElementById("player-el");
//let sumEl=document.querySelector("#sum");
playerEl.textContent=player.name+": $"+player.chips;
function startGame(){
    let firstcard=getRandomCard();
    let secondcard=getRandomCard();
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard;
    renderGame();
}
function newGame(){
    let firstcard=getRandomCard();
    let secondcard=getRandomCard();
    let cards=[firstcard,secondcard];
    sum=firstcard+secondcard;
    let hasblackjack=false;
    let isalive=true;
    message="";
    renderGame();
}
function getRandomCard(){
    let randomnumber=Math.floor(Math.random()*13)+1;
    if(randomnumber>10){
        return 10;
    }else if(randomnumber===1){
        return 11;
    }
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

cardsEl.textContent = "Cards: ";

for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
}of 
}
function newCard(){
    if(isalive===true && hasblackjack===false){
   let newcard=getRandomCard();
    sum+=newcard;
    cards.push(newcard);
    cardsEl.textContent = "Cards: ";

for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
}
    sumEl.textContent="Sum: "+sum;
    renderGame();}
    
}