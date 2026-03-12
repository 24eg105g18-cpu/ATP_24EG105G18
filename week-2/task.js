                // import { ... } from './validator.js';
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    const tasks = [];
                    
                    // 1. Add new task
                  export  function addTask(title, priority, dueDate) {
                        if(!validateTitle()&& !validatePriority()&& !validateDueDate())
{  
    return "Invalid"

}
                 tasks.push({title,priority,dueDate})
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                 export   function getAllTasks() {
                        return tasks;
                      // Return all tasks
                    }

                    
                    // 3. Mark task as complete
                 export   function completeTask(taskId) {
                    console.log()
                      // Find task and mark as complete
                  }

                  // Export functions