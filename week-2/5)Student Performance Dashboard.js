//ASSIGNMENT 2:
//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
  //  1. filter() students who passed (marks ≥ 40)
  //  2. map() to add a grade field
   //           ≥90 → A
   //           ≥75 → B
   //           ≥60 → C
   //           else → D

//   3. reduce() to calculate average marks
//   4. find() the student who scored 92
//   5. findIndex() of student "Kiran"
//1
 let r1=students.filter((students)=>students.marks>=40)
    console.log("passed student marks ",r1)
    //2
    let r2=students.map((students)=>{
        if(students.marks>=90)
             grade="A" 
        if(students.marks>=75)
            grade=" B"
        else if(students.marks>=60)
            grade="C"
        else grade="D"
        return{
            students,grade
        }
    })
    console.log(r2)
    //3
    let r3=students.reduce((accumulator,element)=>accumulator+element.marks,0)
    console.log(r3/students.length)
    //4
    let r4=students.find(students=>students.marks==92)
    console.log(r4)
    //5
    let r5=students.findIndex(students=>students.name=="Kiran")
    console.log(r5)