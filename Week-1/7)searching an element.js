//write a function that receives an array,
//search element as args and returns the index of that search element in the array
//it should return "not found" when search element not found 
function search(arr,element){
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===element){
        console.log(" index =",i);
       k++
    }
}
if(k!=1){
    console.log("not found")

}
}
let arr=[23,25,56,87]
result1=search(arr,21)