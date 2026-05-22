import Header from './Header';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <Outlet />
      </main>
      
      {/* Toast notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          className: 'text-sm font-medium bg-white text-slate-900 border border-slate-200/80 shadow-lg rounded-xl',
          duration: 3000,
          style: {
            padding: '12px 16px',
          }
        }}
      />
    </div>
  );
}

export default RootLayout;