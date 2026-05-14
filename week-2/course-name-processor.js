// Assignment 2: Online Course Name Processor
// This module exports course list utilities for filtering, mapping, and searching.
const courses = ['javascript', 'react', 'node', 'mongodb', 'express'];

export function getLongCourseNames(courseList, minLength = 6) {
  return courseList.filter(course => course.length > minLength);
}

export function getUppercaseNames(courseList) {
  return courseList.map(course => course.toUpperCase());
}

export function buildCourseString(courseList) {
  return courseList.map(course => course.toUpperCase()).join(' | ');
}

export function findCourse(courseList, target) {
  return courseList.find(course => course.toLowerCase() === target.toLowerCase());
}

export function findCourseIndex(courseList, target) {
  return courseList.findIndex(course => course.toLowerCase() === target.toLowerCase());
}

console.log('Course utilities:');
console.log(getLongCourseNames(courses));
console.log(getUppercaseNames(courses));
console.log(buildCourseString(courses));
console.log(findCourse(courses, 'react'));
console.log(findCourseIndex(courses, 'node'));