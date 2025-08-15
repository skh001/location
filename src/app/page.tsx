import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Elegance Location</h1>
          <nav className="space-x-4">
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Louez en toute élégance</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl">
          Découvrez nos services de location premium avec des véhicules modernes et un service client irréprochable.
        </p>
        <a
          href="#services"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voir nos services
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Nos Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/car.svg" alt="Voiture" width={80} height={80} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Location de voitures</h4>
            <p className="text-gray-600">Choisissez parmi notre large gamme de véhicules adaptés à vos besoins.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/van.svg" alt="Van" width={80} height={80} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Location de vans</h4>
            <p className="text-gray-600">Idéal pour les voyages en groupe ou les escapades en famille.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/luxury.svg" alt="Luxe" width={80} height={80} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Véhicules de luxe</h4>
            <p className="text-gray-600">Profitez d’une expérience haut de gamme avec nos voitures de prestige.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">À propos de nous</h3>
          <p className="text-gray-700 text-lg">
            Elegance Location s’engage à fournir des véhicules de qualité, un service rapide et une expérience client exceptionnelle. Que ce soit pour affaires ou loisirs, nous avons la solution adaptée à vos besoins.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-600">
          <p>© 2025 Elegance Location. Tous droits réservés.</p>
          <p>Email: contact@elegancelocation.com | Téléphone: 06 12 34 56 78</p>
        </div>
      </footer>
    </div>
  );
}
