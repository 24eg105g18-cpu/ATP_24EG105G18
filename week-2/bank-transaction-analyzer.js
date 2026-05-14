// Bank transaction analyzer module
const transactions = [
  { id: 1, type: 'credit', amount: 5000 },
  { id: 2, type: 'debit', amount: 2000 },
  { id: 3, type: 'credit', amount: 10000 },
  { id: 4, type: 'debit', amount: 3000 }
];

export function getCreditTransactions(transactionList) {
  return transactionList.filter(t => t.type === 'credit');
}

export function getTransactionAmounts(transactionList) {
  return transactionList.map(t => t.amount);
}

export function calculateFinalBalance(transactionList) {
  return transactionList.reduce((total, t) =>
    t.type === 'credit' ? total + t.amount : total - t.amount,
  0);
}

export function findFirstDebit(transactionList) {
  return transactionList.find(t => t.type === 'debit');
}

export function findTransactionIndexByAmount(transactionList, amount) {
  return transactionList.findIndex(t => t.amount === amount);
}

console.log('Bank transaction analyzer results:');
console.log(getCreditTransactions(transactions));
console.log(getTransactionAmounts(transactions));
console.log('Final balance:', calculateFinalBalance(transactions));
console.log('First debit:', findFirstDebit(transactions));
console.log('Index of 10000 amount:', findTransactionIndexByAmount(transactions, 10000));
