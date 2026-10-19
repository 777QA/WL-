import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
    title: '泰山日出',
    subtitle: '五岳之首，一览众山小',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920',
    title: '趵突泉涌',
    subtitle: '天下第一泉，泉城之魂',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523307891476-40c646be55af?w=1920',
    title: '青岛海滨',
    subtitle: '红瓦绿树，碧海蓝天',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
    title: '威海海岸',
    subtitle: '浪漫海滨，幸福之门',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const indicators = [
    { value: '15.8万', unit: 'km²', label: '广袤土地' },
    { value: '3000+', unit: '年', label: '历史传承' },
    { value: '4', unit: '座', label: '魅力城市' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="font-song text-5xl md:text-7xl mb-4 text-center px-4">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">{slide.subtitle}</p>
            <div className="flex items-center space-x-8 md:space-x-16">
              {indicators.map((indicator, i) => (
                <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-ochre">{indicator.value}</span>
                    <span className="text-sm md:text-lg ml-1">{indicator.unit}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 mt-1">{indicator.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-ochre' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
