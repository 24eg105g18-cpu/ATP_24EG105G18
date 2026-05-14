// Assignment 3: Employee Payroll Processor
// This module exports payroll utilities for filtering, mapping, and summarizing employee pay.
const employees = [
  { id: 201, name: 'Amit', salary: 45000, department: 'IT' },
  { id: 202, name: 'Neha', salary: 60000, department: 'HR' },
  { id: 203, name: 'Rahul', salary: 75000, department: 'IT' },
  { id: 204, name: 'Pooja', salary: 30000, department: 'Sales' }
];

export function getEmployeesByDepartment(employeeList, department) {
  return employeeList.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
}

export function getNetSalaryList(employeeList, bonusRate = 0.1) {
  return employeeList.map(employee => ({
    ...employee,
    netSalary: employee.salary + employee.salary * bonusRate
  }));
}

export function getTotalSalaryPayout(employeeList) {
  return employeeList.reduce((total, employee) => total + employee.salary, 0);
}

export function findEmployeeBySalary(employeeList, amount) {
  return employeeList.find(employee => employee.salary === amount);
}

export function findEmployeeIndexByName(employeeList, name) {
  return employeeList.findIndex(employee => employee.name.toLowerCase() === name.toLowerCase());
}

console.log('Employee payroll results:');
console.log(getEmployeesByDepartment(employees, 'IT'));
console.log(getNetSalaryList(employees));
console.log('Total payout:', getTotalSalaryPayout(employees));
console.log('Employee with salary 30000:', findEmployeeBySalary(employees, 30000));
console.log('Index of Neha:', findEmployeeIndexByName(employees, 'Neha'));