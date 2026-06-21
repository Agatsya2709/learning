function displayTrafficlight(color){
    console.log(color);
}
setTimeout(displayTrafficlight,1000,'🛑');
setTimeout(displayTrafficlight,2000,'🟡');
setTimeout(displayTrafficlight,3000,'🟢');
console.log(performance.now());
