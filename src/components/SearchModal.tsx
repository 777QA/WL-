import { useState, useEffect } from 'react';
import Link from 'next/link';
import { attractions } from '@/data/attractions';
import { guides } from '@/data/guides';
import { cities } from '@/data/attractions';

interface SearchResult {
  type: 'attraction' | 'guide' | 'city';
  title: string;
  subtitle: string;
  href: string;
  image?: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    cities.forEach((city) => {
      if (
        city.name.toLowerCase().includes(lowerQuery) ||
        city.pinyin.toLowerCase().includes(lowerQuery) ||
        city.description.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'city',
          title: city.name,
          subtitle: city.pinyin,
          href: `/city/${city.id}`,
          image: city.image,
        });
      }
    });

    attractions.forEach((attr) => {
      if (
        attr.name.toLowerCase().includes(lowerQuery) ||
        attr.description.toLowerCase().includes(lowerQuery) ||
        attr.city.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'attraction',
          title: attr.name,
          subtitle: `${attr.city} · ${attr.description.slice(0, 50)}...`,
          href: '/map',
          image: attr.image,
        });
      }
    });

    guides.forEach((guide) => {
      if (
        guide.title.toLowerCase().includes(lowerQuery) ||
        guide.content.toLowerCase().includes(lowerQuery) ||
        guide.city.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'guide',
          title: guide.title,
          subtitle: `${guide.city} · ${guide.author}`,
          href: '/guides',
          image: guide.image,
        });
      }
    });

    setResults(searchResults.slice(0, 10));
  }, [query]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索城市、景点、攻略..."
              className="flex-1 text-lg outline-none placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-gray-500">
              <p>输入关键词开始搜索</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>未找到相关结果</p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-start space-x-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  {result.image && (
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          result.type === 'city'
                            ? 'bg-ochre/10 text-ochre'
                            : result.type === 'attraction'
                            ? 'bg-ink-green/10 text-ink-green'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {result.type === 'city'
                          ? '城市'
                          : result.type === 'attraction'
                          ? '景点'
                          : '攻略'}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{result.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">{result.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
