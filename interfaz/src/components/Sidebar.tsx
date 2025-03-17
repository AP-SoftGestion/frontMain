// src/components/Sidebar.tsx
import React from 'react';
import { FaTools, FaUser, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">RepairPro</h1>
      <nav>
        <Link href="/" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaHome className="mr-2" /> Inicio
        </Link>
        <Link href="/dashboard" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaTools className="mr-2" /> Dashboard
        </Link>
        <Link href="/empleados" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaUser className="mr-2" /> Empleados
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
