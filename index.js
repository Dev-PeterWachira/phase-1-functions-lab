function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
   return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupDistance){
    const hqLength = 264;
    let hqDistance = distanceFromHqInBlocks(pickupDistance);
    return hqLength * hqDistance;
}
function distanceTravelledInFeet(start,destination){
    const biuldingLength = 264;
    const blocksTravelled = Math.abs(destination - start);
    return(blocksTravelled * biuldingLength);
}
function calculatesFarePrice(start,destination){
const distance = distanceTravelledInFeet(start , destination);
if(distance <= 400){
    return 0;
}
else if (distance > 400 && distance <= 2000){
    const fare = (distance - 400)* 0.02;
    return parseFloat(fare.toFixed(2));
}
else if (distance > 2000 && distance <= 2500){
    return 25;
}
else if (distance > 2500){
    return"cannot travel that far";
}
}
// function calculatesFarePrice(start, destination) {
//     const distance = distanceTravelledInFeet(start, destination); // Correctly pass start and destination

//     if (distance <= 400) {
//         return 0; // Free for distances less than or equal to 400 feet
//     } 
//     else if (distance > 400 && distance <= 2000) {
//         const fare = (distance - 400) * 0.02; // Charge for feet over 400
//         return parseFloat(fare.toFixed(2)); // Return the fare as a number rounded to 2 decimal places
//     } 
//     else if (distance > 2000 && distance <= 2500) {
//         return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
//     } 
//     else if (distance > 2500) { // Correct `else if` for distances over 2500
//         return "cannot travel that far"; // For distances over 2500 feet
//     }
// }

