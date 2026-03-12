//Assignment 3: Student Marks List
//Scenario : You receive marks from an exam system.

//Test data:
let marks = [78, 92, 35, 88, 40, 67];

//asks:
  //  1. filter() (pass marks)
    //2. map() to add 5 grace marks to each student
    // reduce() to find highest mark
    //4. find() first mark below 40
    //5. findIndex() of mark 92
    //1
    let r1=marks.filter((marks)=>marks>=40)
    console.log("passed student marks ",r1)
    //2
    let r2=marks.map((marks)=>marks+5)
    console.log("after adding 5 grace marks to each student:",r2)
    //3
    let highmark=marks.reduce((accumulator,element)=>{
    if(accumulator<element){
        return element
    }else{
        return accumulator
    }
})
console.log("highest marks:",highmark)
//4
let r3=marks.find(marks=>marks<40)
console.log("below 40 marks is :",r3)
//5
let r4=marks.findIndex(marks=>marks==92)
console.log("index number of mark 92 is:",r4)