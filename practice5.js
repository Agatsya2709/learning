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
speedwarning(100, 50);
 // Output: Your speed is 50 units per time
 const distanceTraveledmiles =[267,345,234,190,299]
    const distanceTraveledkm = distanceTraveledmiles.map(miles => Math.round(miles * 1.60934));
console.log(distanceTraveledkm);
// rest parameters
function setPermission(permissionlevel,...users){
    users.forEach(user => {
        console.log(`Setting permission level ${permissionlevel} for user: ${user}`);
    });
}
setPermission("admin", "Alice", "Bob", "Charlie");
const totalDistance = distanceTraveledmiles.reduce((total, miles) => {
    return total + miles;
}, 0);

console.log(`Total distance traveled in miles: ${totalDistance}`);

distanceTraveledkm.forEach((km, index) => {
    console.log(`Distance traveled in kilometers for trip ${index + 1}: ${km} km`);
})