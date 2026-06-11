import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchModal from './SearchModal';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/map', label: '旅游地图' },
  { href: '/guides', label: '攻略广场' },
  { href: '/weather', label: '天气穿搭' },
  { href: '/timeline', label: '历史时间轴' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'navbar-visible py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-song text-2xl text-ochre hover:text-ochre-light transition-colors">
              山止川行
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-white hover:text-ochre-light transition-colors font-medium ${
                    isActive(item.href) ? 'text-ochre' : ''
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ochre" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-ochre-light transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/80 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-warm-white transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center pt-20 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                isActive(item.href) ? 'text-ochre' : 'text-gray-600 hover:text-ochre'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
