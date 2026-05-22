import { useContext } from "react";
import { Link } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from "../store/CounterStore";

function Home() {
  // Call useCounterStore hook to get state and actions of Zustand store
  const newCounter = useCounterStore((state) => state.newCounter);
  const incrementCounter = useCounterStore((state) => state.incrementCounter);
  const decrementCounter = useCounterStore((state) => state.decrementCounter);
  const resetCounter = useCounterStore((state) => state.reset);
  
  const { counter, changeCounter } = useContext(counterContextObj);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome to Employee Hub</h1>
          <p className="text-indigo-100 text-sm sm:text-base max-w-md">
            Manage your organization's roster, keep track of designation details, and edit personnel information seamlessly.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            to="create-emp"
            className="px-4 py-2.5 bg-white text-indigo-600 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-colors shadow-sm"
          >
            Add Employee
          </Link>
          <Link
            to="list"
            className="px-4 py-2.5 bg-indigo-500/30 text-white border border-indigo-400/30 rounded-xl text-sm font-semibold hover:bg-indigo-500/40 transition-colors"
          >
            View Directory
          </Link>
        </div>
      </div>

      {/* Grid containing Quick Info and State Management Playground */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Quick Guide Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            System Features
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
              <span><strong>MERN Backend API:</strong> Communicates with Express server and MongoDB databases on the local environment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
              <span><strong>Dynamic Routing:</strong> Utilizes React Router for fluid layout page changes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
              <span><strong>State Management:</strong> Built-in support for context objects and Zustand state stores.</span>
            </li>
          </ul>
        </div>

        {/* Counter Playground Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
              State Playground
            </h2>
            <p className="text-xs text-slate-500 mt-1">Demonstrating Context & Zustand state integration.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Context Counter */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">React Context</span>
                <p className="text-2xl font-bold text-slate-800 mt-1">{counter}</p>
              </div>
              <button
                onClick={changeCounter}
                className="mt-3 w-full py-1.5 px-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors active:scale-98"
              >
                Increment
              </button>
            </div>

            {/* Zustand Counter */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Zustand Store</span>
                <p className="text-2xl font-bold text-slate-800 mt-1">{newCounter}</p>
              </div>
              <div className="flex gap-1.5 mt-3">
                <button
                  onClick={decrementCounter}
                  className="flex-1 py-1.5 px-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors active:scale-98"
                >
                  -
                </button>
                <button
                  onClick={incrementCounter}
                  className="flex-1 py-1.5 px-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors active:scale-98"
                >
                  +
                </button>
                <button
                  onClick={resetCounter}
                  className="py-1.5 px-2 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-600 rounded-lg text-xs font-semibold transition-colors active:scale-98"
                  title="Reset"
                >
                  ↺
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;