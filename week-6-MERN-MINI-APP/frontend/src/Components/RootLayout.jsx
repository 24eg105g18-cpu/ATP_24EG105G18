import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50/30 overflow-hidden">
      
      {/* Soft Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 -z-10 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />

      {/* Navigation Header */}
      <Header />
      
      {/* Main Responsive Content Area */}
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-grow">
        <div className="animate-fade-in">
          <Outlet />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full border-t border-slate-200 bg-white/50 py-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} StaffSphere portal. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default RootLayout