import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  // Retrieve employee data passed via navigation state
  const { state } = useLocation();

  // Populate form fields with existing employee data on load
  useEffect(() => {
    if (state) {
      setValue("name", state.name || "");
      setValue("email", state.email || "");
      setValue("mobile", state.mobile || "");
      setValue("designation", state.designation || "");
      setValue("companyName", state.companyName || "");
    } else {
      navigate("/list"); // Fallback if no state is passed
    }
  }, [state, setValue, navigate]);

  // Handle saving the modified employee details
  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      setLoading(true);
      setError("");
      // Make HTTP PUT request to update the employee
      const res = await axios.put(`http://localhost:4000/emp-api/employees/${state._id}`, modifiedEmp);
      if (res.status === 200) {
        // Redirect back to the employee list
        navigate("/list");
      } else {
        throw new Error("Unable to save edits");
      }
    } catch (err) {
      console.log("Error updating:", err);
      setError(err.response?.data?.reason || err.message || "Failed to update employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto animate-fade-in py-4">
      <div className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        
        {/* Form Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Edit Employee
          </h1>
          <p className="text-sm text-slate-500">
            Modify the records and credentials of this team member.
          </p>
        </div>

        {/* Error Notification Alert */}
        {error && (
          <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700 flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-rose-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="space-y-1">
              <span className="font-semibold">Failed to update details:</span>
              <p className="text-xs text-rose-600">{error}</p>
            </div>
          </div>
        )}

        {/* Edit Form */}
        <form onSubmit={handleSubmit(saveModifiedEmp)} className="space-y-4">
          
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              placeholder="Enter name"
              required
              {...register("name")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Corporate Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              {...register("email")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 cursor-not-allowed focus:outline-none transition-all shadow-sm"
              readOnly
              title="Corporate emails cannot be altered after creation"
            />
            <p className="text-[10px] text-slate-400">Employee email identifiers cannot be changed.</p>
          </div>

          {/* Mobile Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter mobile number"
              {...register("mobile")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Designation Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Designation / Role</label>
            <input
              type="text"
              placeholder="Enter designation"
              required
              {...register("designation")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Company Name Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Company</label>
            <input
              type="text"
              placeholder="Enter name of the company"
              required
              {...register("companyName")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Form Action Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/list")}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 active:scale-98 transition-all cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 hover:bg-indigo-700 active:scale-98 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Saving...</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditEmployee;