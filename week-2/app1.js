// TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
import {addTask,getAllTasks} from './task.js'
addTask("food","high","12-2-2026")
addTask('work','high','23-3-2026')
addTask('gym','medium','2-25-2026')
let result=getAllTasks()
console.log(result)