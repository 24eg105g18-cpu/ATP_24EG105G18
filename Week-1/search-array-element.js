// search-array-element.js
// Define a function that searches for an element in an array and returns its index.
// If the element is not found, the code prints "not found".
function search(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

const arr = [23, 25, 56, 87];
const result1 = search(arr, 21);

if (result1 === -1) {
    console.log("not found");
} else {
    console.log("index =", result1);
}