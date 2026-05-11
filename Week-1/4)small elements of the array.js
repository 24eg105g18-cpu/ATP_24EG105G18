//small elements of the array
let marks=[90,78,65,98]
let small=0;
for(let i=0;i<marks.length;i++){
    for(let j=0;j<marks.length-i-1;j++){
if(marks[j]>marks[j+1]){
temp=marks[j+1];
marks[j+1]=marks[j];
marks[j]=temp;
}
else {
    break;
}
}
}
console.log("smallest mark is "+marks[0]);