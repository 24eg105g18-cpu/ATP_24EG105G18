import {create} from 'zustand'

//create state
export const useCounterStore=create((set)=>({
//state
newCounter:0,
newCounter:100,
//add user state(name,age,email
user:{name:"ravi",email:"ravi@email.com",age:21},
//function to change name and age
changeEmail:()=>set({...user,email:"test@email.com"}),
//function to chnage name and age
changeNameAndAge:()=>set({...user,name:"bhanu",age:19}),
//functions to modify the state
incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
reset:()=>set({newCounter:0}),   
//function to change newCounter to 500
changeCounter:()=>set({newCounter:500}),
//function to decrement newcounter1 by 20
decrementCounterBy20:()=>set(state=>({newCounter:state.newCounter-20}))

}));