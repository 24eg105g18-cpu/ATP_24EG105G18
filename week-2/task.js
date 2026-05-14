import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  const titleValidation = validateTitle(title);
  if (titleValidation !== true) return titleValidation;

  const priorityValidation = validatePriority(priority);
  if (priorityValidation !== true) return priorityValidation;

  const dueDateValidation = validateDueDate(dueDate);
  if (dueDateValidation !== true) return dueDateValidation;

  const newTask = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(newTask);
  return newTask;
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return `Task with id ${taskId} not found`;

  task.completed = true;
  return task;
}
