import React, { useState } from 'react';
import { FaTools, FaUser, FaHome, FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
        <div className={`bg-gray-800 text-white flex flex-col p-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
    <button onClick={() => setIsCollapsed(!isCollapsed)} className="mb-4">
        <FaBars size={24} className='mb-5'/>
      <h1 className={`text-2xl font-bold mb-2 ${isCollapsed ? 'hidden' : ''}`}>RepairPro</h1>
      </button>


      <nav>
        <Link href="/" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaHome className={`mr-2 ${isCollapsed ? 'mr-auto' : 'text-base'}`} /> {isCollapsed ? '' : 'Inicio'}
        </Link>
        <Link href="/dashboard" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaTools className={`mr-2 ${isCollapsed ? 'mr-auto' : 'text-base'}`} /> {isCollapsed ? '' : 'Dashboard'}
        </Link>
        <Link href="/empleados" className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded">
          <FaUser className={`mr-2 ${isCollapsed ? 'mr-auto' : 'text-base'}`} /> {isCollapsed ? '' : 'Empleados'}
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;
