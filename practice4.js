const snapshot = new Date().getFullYear();
let prevprice = null;

const timeOnly = new Date().toTimeString().slice(0, 8);
const name = "qtech.ai";
const symbol = "🚀";

console.log(`Name: ${name}`);

function expression() {
    let p = Number((Math.random() * 1000).toFixed(2));

    if (prevprice === null) {
        console.log(`Price: $${p}`);
    } else if (p > prevprice) {
        console.log(`Price: $${p} 🔺`);
    } else if (p < prevprice) {
        console.log(`Price: $${p} 🔻`);
    } else {
        console.log(`Price: $${p} ➡️`);
    }

    prevprice = p;
}

setInterval(() => {
    expression();
}, 1000);

console.log(`Symbol: ${symbol}`);
console.log(`Current time is ${timeOnly}`);
console.log(`Year: ${snapshot}`);