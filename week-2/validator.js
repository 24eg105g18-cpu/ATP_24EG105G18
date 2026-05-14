// TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || typeof title !== 'string') {
    return 'Title is required';
  }

  if (title.trim().length < 3) {
    return 'Title must be at least 3 characters long';
  }

  return true;
}
                      
                      // 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const allowedPriorities = ['low', 'medium', 'high'];

  if (!priority || typeof priority !== 'string') {
    return 'Priority is required';
  }

  const normalized = priority.trim().toLowerCase();
  if (!allowedPriorities.includes(normalized)) {
    return 'Priority must be one of: low, medium, high';
  }

  return true;
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (Number.isNaN(dueDate.getTime())) {
    return 'Due date is invalid';
  }

  if (dueDate <= today) {
    return 'Due date must be in the future';
  }

  return true;
}
