import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { BottomNavBar } from './BottomNavBar';

export function AppLayout() {
  const location = useLocation();

  const hideNavRoutes = ['/login', '/success', '/tracking', '/payment'];
  const isFoodDetails = location.pathname.startsWith('/food/');
  const showNav = !hideNavRoutes.includes(location.pathname) && !isFoodDetails;

  return (
    <div className="flex min-h-dvh justify-center bg-gray-50">
      <div className="relative flex h-dvh w-full max-w-md flex-col overflow-hidden bg-white shadow-xl sm:h-screen">
        {/* Main Content Area */}
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        {showNav && <BottomNavBar />}
      </div>
    </div>
  );
}
