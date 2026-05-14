// sum-marks.js
// Calculate and print the total of all marks in the array.
const marks = [90, 78, 65, 98];
let sum = 0;

for (let index = 0; index < marks.length; index++) {
    sum += marks[index];
}

console.log(sum);