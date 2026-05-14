// find-smallest-element.js
// Find and print the smallest element in the array.
const marks = [90, 78, 65, 98];

// Start by assuming the first value is the smallest.
let smallest = marks[0];
for (let i = 1; i < marks.length; i++) {
    if (marks[i] < smallest) {
        smallest = marks[i];
    }
}

console.log("smallest mark is " + smallest);