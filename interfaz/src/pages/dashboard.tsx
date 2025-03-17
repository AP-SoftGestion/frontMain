import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-green-600 p-4 shadow-md">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </nav>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Bienvenido al panel de control</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-green-600 font-semibold">Equipos en reparación</h3>
            <p className="text-gray-700">5 equipos</p>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-orange-500 font-semibold">Reparaciones completadas</h3>
            <p className="text-gray-700">12 equipos</p>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-red-500 font-semibold">Pendientes por revisión</h3>
            <p className="text-gray-700">3 equipos</p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Agregar nuevo equipo</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
