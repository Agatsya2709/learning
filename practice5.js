arr=[1, 2, 3]
const newarr = arr.slice(0, 3);
let constaarr= arr.splice(1,1,3.5)
console.log(newarr); // Output: [1, 2, 3]
console.log(constaarr);
console.log(arr); 

arr.forEach((element,index) => {
    console.log(`Element at index ${index} is ${element}`);
})
const spend= (amount) => {
    console.log(`You spent ${amount}`);
}
spend(10); // Output: You spent 10

const speedwarning = (speed, speedLImit) => {
    if (speed > speedLImit) {
        console.log(`You are exceeding the speed limit of ${speedLImit} units per time! Slow down!`);
    } else {
        console.log(`Your speed is within the limit of ${speedLImit} units per time.`);
    }
    console.log(`Your speed is ${speed} units per time`);
}
speedwarning(100, 50); // Output: Your speed is 50 units per time