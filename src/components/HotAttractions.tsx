import Link from 'next/link';
import { attractions } from '@/data/attractions';

export default function HotAttractions() {
  const shuffledAttractions = [...attractions].sort(() => Math.random() - 0.5);
  const displayAttractions = shuffledAttractions.slice(0, 8);

  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-song text-3xl md:text-4xl text-gray-800 mb-4">热门景点</h2>
          <p className="text-gray-600">山东最受欢迎的旅游胜地</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayAttractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ height: index % 3 === 0 ? '300px' : '200px' }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-ochre text-xs rounded-full">
                    {attraction.city}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-song text-lg font-medium text-gray-800 mb-2">{attraction.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/map"
            className="inline-flex items-center px-6 py-3 bg-ink-green text-white rounded-full hover:bg-green-800 transition-colors"
          >
            在地图上探索
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
