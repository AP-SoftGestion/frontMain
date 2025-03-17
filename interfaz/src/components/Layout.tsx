// src/components/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 bg-gray-100 h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
