import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">EcoDeli - Backoffice</h1>
      <nav className="space-y-4">
        <Link href="/clients" className="text-blue-600 hover:underline text-lg">📋 Gérer les clients</Link>
        <Link href="/commandes" className="text-blue-600 hover:underline text-lg">🛒 Gérer les commandes</Link>
        <Link href="/livreurs" className="text-blue-600 hover:underline text-lg">🚚 Gérer les livreurs</Link>
        <Link href="/commercants" className="text-blue-600 hover:underline text-lg">🏪 Gérer les commerçants</Link>
      </nav>
    </div>
  );
}
