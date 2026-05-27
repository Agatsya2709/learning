let score = 0;
let score2 = 0;
scoreHl=document.getElementById("score");
score2Hl=document.getElementById("score2");
function Increment1(){
    score++;
    

    scoreHl.innerText=score;
    
}
function Increment2(){
    score+=2;
    
    scoreHl.innerText=score;
    
}
function Increment3(){
    score+=3;
    
    scoreHl.innerText=score;

}
function Increment21(){
    score2++;
    score2Hl.innerText=score2;
} 
function Increment22(){
    score2= score2+2;
    score2Hl.innerText=score2;
}
function Increment23(){
    score2+=3;
    score2Hl.innerText=score2;
}  