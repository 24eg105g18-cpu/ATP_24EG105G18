//Assignment 1: Daily Temperature Analyzer
//Assignment 1: Daily Temperature Analyzer
//Assignment 1: Daily Temperature Analyzer
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
let temperature = [32, 35, 28, 40, 38, 30, 42]

//Tasks:
   // 1. filter() temperatures above 35
   // 2. map() to convert all temperatures from Celsius → Fahrenheit
   // 3. reduce() to calculate average temperature
   // 4. find() first temperature above 40
   // 5. findIndex() of temperature 28
//1
let r1=temperature.filter((temp)=>temp>35);
console.log(r1)
//2
let r2=temperature.map((temp)=>temp*1.8+32);
console.log(r2)
//3
let avg=temperature.reduce((accumulator,temp)=>accumulator+temp)/(temperature.length)
console.log(avg)
//4
let r3=temperature.find(temp=>temp>40)
console.log(r3)
//5
let r4=temperature.findIndex(temp=>temp==28)
console.log(r4)