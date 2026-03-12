const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1 Filter credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log(creditTransactions);

// 2 Map transaction amounts
const amounts = transactions.map(t => t.amount);
console.log(amounts);


// 3 Calculate final balance
const balance = transactions.reduce((total, t) =>
  t.type === "credit" ? total + t.amount : total - t.amount
, 0);
console.log(balance);


// 4 Find first debit
const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);


// 5 Find index of amount 10000
const index = transactions.findIndex(t => t.amount === 10000);
console.log(index);

