import { useForm } from 'react-hook-form'

function FormDemo() {
  // Destructure needed functions from useForm hook
  const {
    register,     // Registers inputs to the form
    handleSubmit, // Handles the submit event with validation
    formState: { errors }, // Holds form validation errors
  } = useForm();

  console.log("Form Demo Rendering");

  // Function called when the form is successfully submitted
  const onFormSubmit = (obj) => {
    console.log("Form data:", obj);
  };

  return (
    <div>
      <h1 className='text-center text-5xl'>Form Demo</h1>
      <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit(onFormSubmit)}>
        {/* Username Field with Validation */}
        <div className='mb-3'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", {
              required: "Username required",
              validate: (v) => v.trim().length !== 0 || "Whitespace is not valid",
            })}
            id="username"
            className="border w-full p-3"
          />
          {/* Validation Error Messages */}
          {errors.username?.type === "required" && (
            <p className='text-red-600'>{errors.username.message}</p>
          )}
          {errors.username?.type === "validate" && (
            <p className='text-red-600'>White space is not considered</p>
          )}
        </div>

        {/* Email Field */}
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            {...register("email")} 
            id="email" 
            className="border w-full p-3" 
          />
        </div>

        <button type="submit" className='bg-amber-300 block mx-auto p-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo;