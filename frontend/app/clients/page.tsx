'use client';
import { useState } from 'react';

export default function ClientsPage() {
  const [clients, setClients] = useState([
    { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@email.com' },
    { id: 2, nom: 'Claire Martin', email: 'claire.martin@email.com' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            📋 Liste des clients
          </h1>
          <button
            className="transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg"
            onClick={() =>
              setClients([
                ...clients,
                {
                  id: clients.length + 1,
                  nom: `Client ${clients.length + 1}`,
                  email: `client${clients.length + 1}@email.com`,
                },
              ])
            }
          >
            ➕ Ajouter un client
          </button>
        </div>

        <div className="overflow-x-auto rounded shadow bg-white">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-200 text-xs uppercase tracking-wider text-gray-600">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nom</th>
                <th className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={client.id}
                  className={`border-b transition-colors duration-150 hover:bg-blue-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-6 py-4 font-medium">{client.id}</td>
                  <td className="px-6 py-4">{client.nom}</td>
                  <td className="px-6 py-4">{client.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


