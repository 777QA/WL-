import { useState } from 'react';

interface Outfit {
  id: string;
  image: string;
  city: string;
  description: string;
  temperature: string;
}

const outfits: Outfit[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    city: '青岛',
    description: '海边漫步穿搭',
    temperature: '25°C'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400',
    city: '济南',
    description: '泉城春日穿搭',
    temperature: '20°C'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
    city: '泰安',
    description: '登山休闲穿搭',
    temperature: '18°C'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    city: '临沂',
    description: '山间徒步穿搭',
    temperature: '15°C'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    city: '威海',
    description: '海风穿搭',
    temperature: '12°C'
  },
];

export default function OutfitGallery() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('outfit-scroll-container');
    if (container) {
      const scrollAmount = 350;
      setScrollLeft((prev) => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (direction === 'left') {
          return Math.max(0, prev - scrollAmount);
        } else {
          return Math.min(maxScroll, prev + scrollAmount);
        }
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-song text-3xl md:text-4xl text-gray-800 mb-2">用户穿搭秀</h2>
            <p className="text-gray-600">分享你的旅行穿搭灵感</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="outfit-scroll-container"
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollLeft }}
        >
          {outfits.map((outfit) => (
            <div
              key={outfit.id}
              className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={outfit.image}
                  alt={outfit.description}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                  <span className="px-2 py-1 bg-white/90 text-ochre text-xs rounded-full">
                    {outfit.city}
                  </span>
                  <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                    {outfit.temperature}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-800">{outfit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
