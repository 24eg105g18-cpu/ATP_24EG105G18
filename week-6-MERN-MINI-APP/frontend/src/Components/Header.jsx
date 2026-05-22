import { NavLink } from "react-router";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Brand Logo */}
        <NavLink to="" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            StaffSphere
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="create-emp"
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Add Employee
          </NavLink>

          <NavLink
            to="list"
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Directory
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;