//Assignment 2: Online Course Name Processor
//Scenario : You are preparing a course list for display on a website.

//Test data:
let courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
    //1. filter() courses with name length > 5
   // 2. map() to convert course names to uppercase
    //3. reduce() to generate a single string:
          //    "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

   // 4. find() the course "react"
   // 5. findIndex() of "node"
//1
let res1=courses.filter(courses=>courses.length>5)
console.log("courses with name length > 5 are",res1)
//2
let res2=courses.map(courses=>courses.toUpperCase())
console.log(res2)
//3
let res3=courses.reduce((accumulator,courses)=>accumulator.toUpperCase()+("|")+courses.toUpperCase())
console.log(res3)
//4
let res4=courses.find(courses=>courses=="react")
console.log(res4)
//5
let res5=courses.findIndex(courses=>courses=="node")
console.log(res5)