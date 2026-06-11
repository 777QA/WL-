import Link from 'next/link';
import { cities } from '@/data/attractions';

export default function CityCards() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-song text-3xl md:text-4xl text-gray-800 mb-4">四大魅力城市</h2>
          <p className="text-gray-600">探索山东最具代表性的旅游目的地</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/city/${city.id}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-song text-2xl text-white mb-2">{city.name}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{city.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
