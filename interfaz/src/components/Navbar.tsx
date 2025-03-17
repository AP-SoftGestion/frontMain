// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="h-16 bg-gray-400 shadow-md flex items-center justify-end px-4">
      <p className="mr-4">Bienvenido, Admin</p>
      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Salir</button>
    </div>
  );
};

export default Navbar;
