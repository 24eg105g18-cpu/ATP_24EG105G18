  // ASSIGNMENT 1:
//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
 //  2. Use map() to create a new array with:  { name, totalPrice }

//Tasks:
  //  1. Use filter() to get only inStock products
  //  2. Use map() to create a new array with:  { name, totalPrice }
   // 3. Use reduce() to calculate grand total cart value
   // 4. Use find() to get details of "Mouse"
    //5. Use findIndex() to find the position of "Keyboard"
    //1
let r1=cart.filter((cart)=>cart.inStock)
console.log("only inStock products:",r1)
//2
let newCart = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

console.log(newCart);
//3
let r3=cart.reduce((accumulator,element)=>accumulator+(element.price * element.quantity),0)
console.log(r3)
//4
let r4=cart.find(cart=>cart.name=="Mouse")
console.log(r4)
//5
let r5=cart.findIndex(cart=>cart.name=="Keyboard")
console.log(r5)


