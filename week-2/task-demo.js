// app1.js
// Test the task module by adding, listing, and completing tasks.
import { addTask, getAllTasks, completeTask } from './task.js';

console.log('=== Task Manager Demo ===');

console.log(addTask('food', 'high', '2026-02-12'));
console.log(addTask('work', 'high', '2026-03-23'));
console.log(addTask('gym', 'medium', '2026-02-25'));
console.log(addTask('hi', 'urgent', '2024-01-01')); // invalid sample

console.log('\nAll tasks:');
console.log(getAllTasks());

console.log('\nCompleting task id 2:');
console.log(completeTask(2));

console.log('\nAll tasks after completion:');
console.log(getAllTasks());
