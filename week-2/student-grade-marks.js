// Assignment 3: Student Marks List
// This module provides reusable student marks utilities.
const marks = [78, 92, 35, 88, 40, 67];

export function getPassedMarks(markList, passMark = 40) {
  return markList.filter(mark => mark >= passMark);
}

export function addGraceMarks(markList, grace = 5) {
  return markList.map(mark => mark + grace);
}

export function getHighestMark(markList) {
  return markList.reduce((max, current) => (current > max ? current : max), markList[0]);
}

export function findFirstBelow(markList, threshold = 40) {
  return markList.find(mark => mark < threshold);
}

export function findMarkIndex(markList, value) {
  return markList.findIndex(mark => mark === value);
}

console.log('Grade marks utilities:');
console.log(getPassedMarks(marks));
console.log(addGraceMarks(marks));
console.log('Highest mark:', getHighestMark(marks));
console.log('First below 40:', findFirstBelow(marks));
console.log('Index of 92:', findMarkIndex(marks, 92));