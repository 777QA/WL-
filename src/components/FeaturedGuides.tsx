import { useState } from 'react';
import Link from 'next/link';
import { guides } from '@/data/guides';

export default function FeaturedGuides() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('guides-scroll-container');
    if (container) {
      const scrollAmount = 300;
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
            <h2 className="font-song text-3xl md:text-4xl text-gray-800 mb-2">精选攻略</h2>
            <p className="text-gray-600">达人分享的旅行秘籍</p>
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
          id="guides-scroll-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollLeft }}
        >
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-ochre/10 text-ochre text-xs rounded-full mb-2">
                  {guide.city}
                </span>
                <h3 className="font-song text-lg font-medium text-gray-800 mb-2 line-clamp-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{guide.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{guide.author}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {guide.likes}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      {guide.comments.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="inline-flex items-center px-6 py-3 bg-ochre text-white rounded-full hover:bg-ochre-light transition-colors"
          >
            查看更多攻略
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
