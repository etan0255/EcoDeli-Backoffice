import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">EcoDeli - Backoffice</h1>
      </header>

      <nav className="bg-white rounded shadow p-4 mb-6 flex justify-center gap-6">
        <Link href="/" className="text-blue-600 hover:underline">Accueil</Link>
        <Link href="/clients" className="text-blue-600 hover:underline">Clients</Link>
        <Link href="/commandes" className="text-blue-600 hover:underline">Commandes</Link>
        <Link href="/livreurs" className="text-blue-600 hover:underline">Livreurs</Link>
        <Link href="/commercants" className="text-blue-600 hover:underline">Commerçants</Link>
      </nav>

      <main className="bg-white rounded shadow p-6 text-center">
        <p className="text-lg">Bienvenue dans le tableau de bord EcoDeli 🎯</p>
        <p className="text-sm text-gray-600 mt-2">Choisissez une section dans le menu ci-dessus pour commencer.</p>
      </main>
    </div>
  );
}

