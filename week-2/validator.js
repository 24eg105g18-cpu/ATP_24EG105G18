// TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                    export  function validateTitle(title) {
                    if(!title)
                    {return "Title is required";

                    }
                    if(title.length<3){
                        return "min 3 char are required"
                    }
                    return true;
                    
                    
                    }
                      
                      // 2. Validate priority (must be: low, medium, high)
                     export function validatePriority(priority) {
                      priority=['low','medium','high']
                     let result=priorities.include(priority)
                     if(result==false){
                        return "in valid priority"
                     }
                     return true
                      }
                      
                      // 3. Validate due date (must be future date)
                   export   function validateDueDate(date) {
                    let dueDate=new Date('2024-10-20')
                    let today=new Date()
                    if(dueDate>today)
                        return true
                      } 
