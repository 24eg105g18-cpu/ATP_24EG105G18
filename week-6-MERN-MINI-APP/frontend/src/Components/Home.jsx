import { useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from "../store/CounterStore";

function Home() {
  const navigate = useNavigate();
  
  // Call useCounterStore hook to get state of Zustand store
  const newCounter = useCounterStore((state) => state.newCounter);
  const incrementCounter = useCounterStore((state) => state.incrementCounter);
  const decrementCounter = useCounterStore((state) => state.decrementCounter);
  const resetCounter = useCounterStore((state) => state.reset);
  const user = useCounterStore((state) => state.user);

  // Call context provider for counter state
  const { counter, changeCounter } = useContext(counterContextObj);

  return (
    <div className="space-y-12">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 px-8 py-12 text-white shadow-xl shadow-indigo-100 sm:px-12 sm:py-16">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute left-0 bottom-0 -ml-16 -mb-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-2xl" />
        
        <div className="relative max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100 backdrop-blur-md">
            🚀 Version 2.0 Live
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Streamline Your Workplace Directory
          </h1>
          <p className="text-base sm:text-lg text-indigo-100 font-light leading-relaxed">
            Welcome to StaffSphere. Effortlessly catalog team members, adjust employee profiles, and monitor system metrics in real-time on our high-performance admin portal.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigate("/list")}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-md hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Browse Directory
            </button>
            <button
              onClick={() => navigate("/create-emp")}
              className="rounded-xl border border-indigo-400 bg-indigo-500/20 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Add New Employee
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Dashboard Statistics */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            Operations Overview
          </h2>
          <span className="text-xs font-medium text-slate-400">
            Real-time updates
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Active Staff</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-slate-800">124</h3>
              <p className="mt-1 text-xs text-emerald-600 font-medium">
                +12% increase this month
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Departments</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-slate-800">8</h3>
              <p className="mt-1 text-xs text-slate-500 font-medium">
                4 core divisions
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Server Health</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-slate-800">99.9%</h3>
              <p className="mt-1 text-xs text-violet-600 font-medium">
                Connected: DB online
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Zustand Session</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg className="h-5 w-5 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-slate-800">{newCounter}</h3>
              <p className="mt-1 text-xs text-slate-400 font-medium">
                Logged: {user.name}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Reactive State Control Playground (Context & Zustand Demo) */}
      <section className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">State Management Dashboard</h2>
          <p className="text-sm text-slate-500 mt-1">
            Observe the real-time reactivity of React Context API and Zustand store state changes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Context Control Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                <h3 className="font-semibold text-slate-800">React Context Provider</h3>
              </div>
              <p className="text-xs text-slate-500">
                Shared React-scoped state injected down through the Context DOM tree.
              </p>
            </div>
            
            <div className="my-6 text-center">
              <span className="text-slate-400 text-xs block uppercase font-medium tracking-wide">Context Counter</span>
              <span className="text-5xl font-extrabold text-slate-800 tracking-tight">{counter}</span>
            </div>

            <button
              onClick={changeCounter}
              className="w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-600 active:scale-98 transition-all cursor-pointer"
            >
              Increment Context Counter
            </button>
          </div>

          {/* Zustand Control Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
                <h3 className="font-semibold text-slate-800">Zustand Global Store</h3>
              </div>
              <p className="text-xs text-slate-500">
                Atomic, high-performance external state store outside the component tree.
              </p>
            </div>

            <div className="my-6 text-center">
              <span className="text-slate-400 text-xs block uppercase font-medium tracking-wide">Zustand Counter</span>
              <span className="text-5xl font-extrabold text-slate-800 tracking-tight">{newCounter}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={incrementCounter}
                className="flex-1 rounded-xl bg-indigo-600 px-3 py-3 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 active:scale-98 transition-all cursor-pointer"
              >
                Increment
              </button>
              <button
                onClick={decrementCounter}
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 active:scale-98 transition-all cursor-pointer"
              >
                Decrement
              </button>
              <button
                onClick={resetCounter}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs font-semibold text-slate-500 hover:text-red-500 hover:bg-red-50 hover:border-red-100 active:scale-98 transition-all cursor-pointer"
                title="Reset"
              >
                Reset
              </button>
            </div>
          </div>

        </div>

        {/* Zustand State Inspector Panel */}
        <div className="rounded-xl border border-slate-100 bg-slate-50/30 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Store User profile: <strong>{user.name}</strong> ({user.email})</span>
          </div>
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-mono">
            Age: {user.age}
          </span>
        </div>

      </section>

    </div>
  );
}

export default Home;