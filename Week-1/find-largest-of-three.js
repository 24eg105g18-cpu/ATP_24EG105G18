// find-largest-of-three.js
// Compare three numbers and print which one is the greatest.
const a = 20;
const b = 40;
const c = 25;

// Check each number to identify the largest.
if (a > b && a > c) {
    console.log("a is the greatest");
} else if (b > c) {
    console.log("b is the greatest");
} else {
    console.log("c is the greatest");
}