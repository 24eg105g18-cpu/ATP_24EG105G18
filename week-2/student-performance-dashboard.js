// Assignment 2: Student Performance Dashboard
// This module provides reusable functions for student result analysis.
const students = [
  { id: 1, name: 'Ravi', marks: 78 },
  { id: 2, name: 'Anjali', marks: 92 },
  { id: 3, name: 'Kiran', marks: 35 },
  { id: 4, name: 'Sneha', marks: 88 },
  { id: 5, name: 'Arjun', marks: 40 }
];

export function getPassedStudents(studentsList, passMarks = 40) {
  return studentsList.filter(student => student.marks >= passMarks);
}

export function assignGrades(studentsList) {
  return studentsList.map(student => {
    let grade;
    if (student.marks >= 90) {
      grade = 'A';
    } else if (student.marks >= 75) {
      grade = 'B';
    } else if (student.marks >= 60) {
      grade = 'C';
    } else {
      grade = 'D';
    }

    return {
      ...student,
      grade
    };
  });
}

export function calculateAverageMarks(studentsList) {
  if (!studentsList.length) return 0;
  const total = studentsList.reduce((sum, student) => sum + student.marks, 0);
  return total / studentsList.length;
}

export function findStudentByMarks(studentsList, marks) {
  return studentsList.find(student => student.marks === marks);
}

export function findStudentIndexByName(studentsList, name) {
  return studentsList.findIndex(student => student.name.toLowerCase() === name.toLowerCase());
}

console.log('Student performance results:');
console.log(getPassedStudents(students));
console.log(assignGrades(students));
console.log('Average marks:', calculateAverageMarks(students));
console.log('Student with 92 marks:', findStudentByMarks(students, 92));
console.log('Index of Kiran:', findStudentIndexByName(students, 'Kiran'));
