// largest-of-three-function.js
// Define a function that receives three numbers and returns the largest amount.
function largestNum(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

const result = largestNum(20, 40, 25);
console.log("Largest number:", result);