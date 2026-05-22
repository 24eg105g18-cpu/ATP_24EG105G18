import { useLocation, useNavigate } from "react-router";

function Employee() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // If no state is present (e.g. page was refreshed directly), redirect or show error
  if (!state) {
    return (
      <div className="text-center py-12 space-y-4 max-w-md mx-auto animate-fade-in">
        <div className="text-slate-400">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-800">No Employee Selected</h2>
        <p className="text-sm text-slate-500">Please navigate from the employee directory directory list.</p>
        <button
          onClick={() => navigate("/list")}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95 transition-all cursor-pointer"
        >
          Go to Directory
        </button>
      </div>
    );
  }

  // Generate a soft gradient based on the employee name length for avatar
  const getAvatarGradient = (name = "") => {
    const len = name.length;
    if (len % 4 === 0) return "from-indigo-500 to-cyan-500";
    if (len % 4 === 1) return "from-emerald-500 to-teal-500";
    if (len % 4 === 2) return "from-pink-500 to-rose-500";
    return "from-violet-500 to-purple-500";
  };

  return (
    <div className="max-w-md mx-auto animate-fade-in py-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/list")}
        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 text-sm font-semibold mb-5 transition-colors cursor-pointer group"
      >
        <svg className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Directory</span>
      </button>

      {/* Corporate Badge Layout */}
      <div className="rounded-3xl border border-slate-200/60 bg-white shadow-sm overflow-hidden">
        
        {/* Color Top Banner */}
        <div className={`h-24 bg-gradient-to-r ${getAvatarGradient(state.name)}`} />

        {/* Profile Card Header */}
        <div className="px-6 pb-6 text-center -mt-12 space-y-4">
          
          {/* Circular Avatar */}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-3xl font-extrabold text-slate-800 shadow-md">
              {state.name ? state.name.charAt(0).toUpperCase() : "?"}
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{state.name}</h2>
            <p className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
              {state.designation}
            </p>
          </div>
        </div>

        {/* Credentials and Meta details */}
        <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-6 space-y-4 text-sm text-slate-700">
          
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-400 flex-shrink-0">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Corporate Email</span>
              <span className="font-medium text-slate-800">{state.email}</span>
            </div>
          </div>

          {/* Phone */}
          {state.mobile && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-400 flex-shrink-0">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Direct Line</span>
                <span className="font-medium text-slate-800">{state.mobile}</span>
              </div>
            </div>
          )}

          {/* Company */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-400 flex-shrink-0">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Organization</span>
              <span className="font-medium text-slate-800">{state.companyName}</span>
            </div>
          </div>

        </div>

        {/* Card Footer Actions */}
        <div className="px-6 py-4 bg-slate-100/50 border-t border-slate-100 flex gap-3">
          <button
            onClick={() => navigate("/edit-emp", { state })}
            className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-semibold text-white shadow-sm active:scale-98 transition-all cursor-pointer"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>Edit Employee</span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default Employee;