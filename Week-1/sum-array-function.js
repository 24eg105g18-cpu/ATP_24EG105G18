// sum-array-function.js
// Define a function that receives an array and returns the total sum of its values.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumArray([12, 1, 14, 15]);
console.log(result);