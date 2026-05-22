import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Navigate to single employee view page
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // Navigate to edit employee page
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // Delete employee record and refresh list
  const deleteEmployee = async (email) => {
    if (!window.confirm(`Are you sure you want to remove the record for ${email}?`)) {
      return;
    }
    try {
      setLoading(true);
      let res = await axios.delete(
        `http://localhost:4000/emp-api/employees/${email}`
      );

      if (res.status === 200) {
        getEmps(); // Fetch updated list
      }
    } catch (err) {
      console.log("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all employees from backend
  async function getEmps() {
    try {
      setLoading(true);
      setError("");
      let res = await axios.get(
        "http://localhost:4000/emp-api/employees"
      );

      if (res.status === 200) {
        setEmps(res.data.payload || []);
      }
    } catch (err) {
      console.log("Error:", err);
      setError("Unable to connect to the server. Make sure the backend database is running.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    getEmps();
  }, []);

  // Filter employees based on search term
  const filteredEmps = emps.filter(
    (emp) =>
      emp.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate a soft gradient based on the employee name length (for diverse avatar colors)
  const getAvatarGradient = (name = "") => {
    const len = name.length;
    if (len % 4 === 0) return "from-indigo-400 to-cyan-400 text-indigo-900";
    if (len % 4 === 1) return "from-emerald-400 to-teal-400 text-emerald-950";
    if (len % 4 === 2) return "from-pink-400 to-rose-400 text-rose-950";
    return "from-violet-400 to-purple-400 text-violet-950";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header and Controls */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Employee Directory
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Search, view details, update, or remove registered corporate staff members.
          </p>
        </div>

        {/* Live Search Field */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name, email, role, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700 flex items-center gap-3">
          <svg className="h-5 w-5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <span className="font-semibold">Network Error: </span>
            {error}
          </div>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && emps.length === 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-100 bg-white p-6 space-y-4 animate-pulse">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-slate-200" />
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <div className="h-4 w-24 rounded bg-slate-200" />
                <div className="h-3 w-32 rounded bg-slate-100" />
                <div className="h-5 w-20 rounded bg-slate-100 mt-2" />
              </div>
              <div className="h-px bg-slate-100 w-full pt-2" />
              <div className="flex gap-2 justify-center pt-2">
                <div className="h-9 w-16 rounded-xl bg-slate-100" />
                <div className="h-9 w-16 rounded-xl bg-slate-100" />
                <div className="h-9 w-16 rounded-xl bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Directory Grid */}
      {!loading && filteredEmps.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredEmps.map((empObj) => (
            <div
              key={empObj._id}
              className="group relative rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 text-center">
                
                {/* Circular Profile Avatar */}
                <div className="flex justify-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getAvatarGradient(empObj.name)} shadow-inner text-xl font-bold uppercase`}>
                    {empObj.name ? empObj.name.charAt(0) : "?"}
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                    {empObj.name}
                  </h3>
                  <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    {empObj.designation}
                  </span>
                  <p className="text-xs text-slate-400 font-medium">
                    {empObj.companyName}
                  </p>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-slate-100 w-full my-2 pt-2" />

                {/* Sub-Info List */}
                <div className="space-y-1 text-left text-xs text-slate-500">
                  <div className="flex items-center gap-2 truncate" title={empObj.email}>
                    <svg className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{empObj.email}</span>
                  </div>
                  {empObj.mobile && (
                    <div className="flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{empObj.mobile}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Action Buttons Container */}
              <div className="flex items-center gap-2 mt-6 pt-2 border-t border-slate-50">
                
                {/* View Button */}
                <button
                  onClick={() => gotoEmployee(empObj)}
                  className="flex-1 inline-flex justify-center items-center gap-1 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-700 active:scale-95 transition-all cursor-pointer"
                  title="View Profile Details"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View</span>
                </button>

                {/* Edit Button */}
                <button
                  onClick={() => gotoEditEmployee(empObj)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 hover:border-amber-200 text-amber-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title="Edit Record"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteEmployee(empObj.email)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-100 hover:border-rose-200 text-rose-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title="Delete Record"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredEmps.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-4 max-w-xl mx-auto my-12 shadow-sm">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-800">
              {emps.length === 0 ? "No Employees Registered" : "No Matches Found"}
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              {emps.length === 0
                ? "Get started by adding your first employee to populate the corporate database directory."
                : `We couldn't find any employees matching "${searchTerm}". Try checking your spelling or searching another field.`}
            </p>
          </div>
          <div className="pt-2">
            {emps.length === 0 ? (
              <button
                onClick={() => navigate("/create-emp")}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Add First Employee</span>
              </button>
            ) : (
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600 active:scale-95 transition-all cursor-pointer"
              >
                Clear Search Filter
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default ListOfEmps;