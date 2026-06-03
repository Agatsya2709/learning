//function Increment(){
//    let count = document.getElementById("count").innerText;
//    count++;
//    document.getElementById("count").innerText = count;
//}
let countFL=document.getElementById("count");
let totalFl=document.getElementById("total");
let messageEl=document.getElementById("message");
let count=0;
let totalcount=0;
function Increment(){
    count++;
    countFL.innerText=count;
}
function save(){
    console.log(count);
    totalcount += count;
    messageEl.textContent = messageEl.textContent + count + " - ";
    count = 0;
    countFL.innerText = count;
    totalFl.innerText = "Total count: " + totalcount;
} 