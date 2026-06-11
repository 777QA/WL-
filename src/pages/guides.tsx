import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Guide } from '@/data/guides';
import { cities } from '@/data/attractions';

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [newGuide, setNewGuide] = useState({
    title: '',
    content: '',
    image: '',
    city: '济南',
    author: '',
  });

  useEffect(() => {
    const storedGuides = localStorage.getItem('guides');
    if (storedGuides) {
      const parsedGuides = JSON.parse(storedGuides);
      setGuides(parsedGuides);
    } else {
      import('@/data/guides').then((module) => {
        setGuides(module.guides);
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guide: Guide = {
      id: Date.now().toString(),
      title: newGuide.title,
      content: newGuide.content,
      image: newGuide.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      city: newGuide.city,
      author: newGuide.author || '匿名用户',
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0,
      favorites: 0,
      comments: [],
    };

    const updatedGuides = [guide, ...guides];
    setGuides(updatedGuides);
    localStorage.setItem('guides', JSON.stringify(updatedGuides));
    setShowForm(false);
    setNewGuide({ title: '', content: '', image: '', city: '济南', author: '' });
  };

  const toggleLike = (guideId: string) => {
    const liked = JSON.parse(localStorage.getItem('liked') || '[]');
    let newLiked: string[];

    if (liked.includes(guideId)) {
      newLiked = liked.filter((id: string) => id !== guideId);
      setGuides(guides.map((g) => (g.id === guideId ? { ...g, likes: g.likes - 1 } : g)));
    } else {
      newLiked = [...liked, guideId];
      setGuides(guides.map((g) => (g.id === guideId ? { ...g, likes: g.likes + 1 } : g)));
    }

    localStorage.setItem('liked', JSON.stringify(newLiked));
    localStorage.setItem('guides', JSON.stringify(guides));
  };

  const toggleFavorite = (guideId: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites: string[];

    if (favorites.includes(guideId)) {
      newFavorites = favorites.filter((id: string) => id !== guideId);
      setGuides(guides.map((g) => (g.id === guideId ? { ...g, favorites: g.favorites - 1 } : g)));
    } else {
      newFavorites = [...favorites, guideId];
      setGuides(guides.map((g) => (g.id === guideId ? { ...g, favorites: g.favorites + 1 } : g)));
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    localStorage.setItem('guides', JSON.stringify(guides));
  };

  const filteredGuides = selectedCity === 'all'
    ? guides
    : guides.filter((guide) => guide.city === selectedCity);

  return (
    <>
      <Head>
        <title>攻略广场 - 山止川行</title>
        <meta name="description" content="分享你的山东旅行攻略，发现更多旅行灵感" />
      </Head>

      <div className="min-h-screen bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-song text-4xl md:text-5xl text-gray-800 mb-4">攻略广场</h1>
            <p className="text-lg text-gray-600">分享你的旅行故事，发现更多旅行灵感</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto">
              <button
                onClick={() => setSelectedCity('all')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCity === 'all'
                    ? 'bg-ochre text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                全部城市
              </button>
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city.name)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCity === city.name
                      ? 'bg-ochre text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-ochre text-white rounded-full hover:bg-ochre-light transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              发布攻略
            </button>
          </div>

          {showForm && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="font-song text-2xl text-gray-800 mb-6">发布新攻略</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
                  <input
                    type="text"
                    required
                    value={newGuide.title}
                    onChange={(e) => setNewGuide({ ...newGuide, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                    placeholder="给你的攻略起个标题"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">城市</label>
                    <select
                      value={newGuide.city}
                      onChange={(e) => setNewGuide({ ...newGuide, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                    >
                      {cities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                    <input
                      type="text"
                      value={newGuide.author}
                      onChange={(e) => setNewGuide({ ...newGuide, author: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                      placeholder="留空显示"匿名用户""
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">图片URL</label>
                  <input
                    type="url"
                    value={newGuide.image}
                    onChange={(e) => setNewGuide({ ...newGuide, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                    placeholder="可选，填写图片链接"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">正文</label>
                  <textarea
                    required
                    rows={6}
                    value={newGuide.content}
                    onChange={(e) => setNewGuide({ ...newGuide, content: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                    placeholder="分享你的旅行经历和攻略..."
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">💡 请文明发言，分享真实、有价值的旅行经验</p>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-ochre text-white rounded-lg hover:bg-ochre-light transition-colors"
                  >
                    发布攻略
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    取消
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                onLike={toggleLike}
                onFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function GuideCard({
  guide,
  onLike,
  onFavorite,
}: {
  guide: Guide;
  onLike: (id: string) => void;
  onFavorite: (id: string) => void;
}) {
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const likedList = JSON.parse(localStorage.getItem('liked') || '[]');
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setLiked(likedList.includes(guide.id));
    setFavorited(favoritesList.includes(guide.id));
  }, [guide.id]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 text-ochre text-sm rounded-full">
            {guide.city}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-song text-xl text-gray-800 mb-3 line-clamp-2">{guide.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{guide.content}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{guide.author}</span>
          <span className="text-xs text-gray-400">{guide.createdAt}</span>
        </div>
        <div className="flex items-center space-x-4 pt-4 border-t">
          <button
            onClick={() => {
              setLiked(!liked);
              onLike(guide.id);
            }}
            className={`flex items-center space-x-1 transition-colors ${
              liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm">{guide.likes}</span>
          </button>
          <button
            onClick={() => {
              setFavorited(!favorited);
              onFavorite(guide.id);
            }}
            className={`flex items-center space-x-1 transition-colors ${
              favorited ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
            }`}
          >
            <svg className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm">{guide.favorites}</span>
          </button>
          <span className="flex items-center space-x-1 text-gray-500 ml-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm">{guide.comments.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
