import { useState, useEffect } from 'react';
import Head from 'next/head';
import { cities } from '@/data/attractions';

interface WeatherData {
  temp: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface Outfit {
  id: string;
  image: string;
  city: string;
  description: string;
  temperature: string;
}

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState<string>('jinan');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [newOutfit, setNewOutfit] = useState({
    city: '济南',
    description: '',
    image: '',
  });

  useEffect(() => {
    const storedOutfits = localStorage.getItem('outfits');
    if (storedOutfits) {
      setOutfits(JSON.parse(storedOutfits));
    } else {
      setOutfits([
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
          city: '青岛',
          description: '海边漫步穿搭',
          temperature: '25°C',
        },
        {
          id: '2',
          image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400',
          city: '济南',
          description: '泉城春日穿搭',
          temperature: '20°C',
        },
        {
          id: '3',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
          city: '泰安',
          description: '登山休闲穿搭',
          temperature: '18°C',
        },
        {
          id: '4',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
          city: '临沂',
          description: '山间徒步穿搭',
          temperature: '15°C',
        },
        {
          id: '5',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
          city: '威海',
          description: '海风穿搭',
          temperature: '12°C',
        },
      ]);
    }
  }, []);

  const fetchWeather = async (cityId: string) => {
    setLoading(true);
    setError(null);

    const mockWeatherData: Record<string, WeatherData> = {
      jinan: { temp: 22, weather: '晴', humidity: 45, windSpeed: 12, description: '天气晴朗，适合出行' },
      qingdao: { temp: 18, weather: '多云', humidity: 65, windSpeed: 15, description: '海风习习，凉爽舒适' },
      linyi: { temp: 20, weather: '晴转多云', humidity: 50, windSpeed: 10, description: '气温适宜，户外活动佳' },
      weihai: { temp: 17, weather: '阴', humidity: 70, windSpeed: 18, description: '海风较大，注意保暖' },
    };

    setTimeout(() => {
      const data = mockWeatherData[cityId] || mockWeatherData['jinan'];
      setWeather(data);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedCity) {
      fetchWeather(selectedCity);
    }
  }, [selectedCity]);

  const recommendOutfit = (temp: number) => {
    if (temp > 30) {
      return {
        recommendation: '轻薄透气衣物、防晒衣、短裤',
        tips: ['选择棉麻材质，透气舒适', '佩戴遮阳帽和太阳镜', '携带防晒霜SPF50+'],
      };
    } else if (temp > 20) {
      return {
        recommendation: '薄外套、长袖衬衫、轻便裤装',
        tips: ['早晚温差大，带件外套', '选择浅色系衣物', '舒适的步行鞋'],
      };
    } else if (temp > 10) {
      return {
        recommendation: '风衣、毛衣、牛仔裤',
        tips: ['层次穿搭，方便增减', '戴上围巾，增添时尚感', '防水鞋款更佳'],
      };
    } else if (temp > 0) {
      return {
        recommendation: '羽绒服、厚毛衣、保暖内衣',
        tips: ['羽绒服轻便又保暖', '帽子围巾手套齐全', '选择防滑鞋'],
      };
    } else {
      return {
        recommendation: '厚羽绒服、保暖内衣、围巾帽子手套',
        tips: ['全方位保暖', '选择保暖性能好的鞋子', '注意头部和脚部保暖'],
      };
    }
  };

  const handleUploadOutfit = (e: React.FormEvent) => {
    e.preventDefault();
    const outfit: Outfit = {
      id: Date.now().toString(),
      image: newOutfit.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      city: newOutfit.city,
      description: newOutfit.description,
      temperature: weather ? `${weather.temp}°C` : '20°C',
    };

    const updatedOutfits = [outfit, ...outfits];
    setOutfits(updatedOutfits);
    localStorage.setItem('outfits', JSON.stringify(updatedOutfits));
    setShowUploadForm(false);
    setNewOutfit({ city: '济南', description: '', image: '' });
  };

  const currentCity = cities.find((c) => c.id === selectedCity);
  const outfitRecommendation = weather ? recommendOutfit(weather.temp) : null;

  return (
    <>
      <Head>
        <title>天气穿搭 - 山止川行</title>
        <meta name="description" content="查看山东各城市天气，获取穿搭推荐" />
      </Head>

      <div className="min-h-screen bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-song text-4xl md:text-5xl text-gray-800 mb-4">天气穿搭推荐</h1>
            <p className="text-lg text-gray-600">根据天气状况，为你推荐最佳穿搭</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-song text-2xl text-gray-800 mb-6">选择城市</h2>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city.id)}
                    className={`p-4 rounded-lg transition-all ${
                      selectedCity === city.id
                        ? 'bg-ochre text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-medium">{city.name}</div>
                    <div className="text-sm opacity-75">{city.pinyin}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-song text-2xl text-gray-800 mb-6">当前天气</h2>
              {loading ? (
                <div className="flex items-center justify-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ochre"></div>
                </div>
              ) : error ? (
                <div className="text-center text-red-500 py-8">{error}</div>
              ) : weather ? (
                <div>
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-ochre mb-2">{weather.temp}°C</div>
                    <div className="text-xl text-gray-600">{weather.weather}</div>
                    <div className="text-sm text-gray-500 mt-2">{weather.description}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">湿度</div>
                      <div className="text-lg font-medium text-gray-800">{weather.humidity}%</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">风速</div>
                      <div className="text-lg font-medium text-gray-800">{weather.windSpeed} km/h</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {outfitRecommendation && weather && (
            <div className="bg-gradient-to-r from-ochre/10 to-ink-green/10 rounded-xl shadow-lg p-8 mb-16">
              <h2 className="font-song text-3xl text-gray-800 mb-6 text-center">穿搭推荐</h2>
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-medium text-xl text-ochre mb-4">推荐搭配</h3>
                <p className="text-lg text-gray-700 mb-4">{outfitRecommendation.recommendation}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">穿搭建议：</h4>
                  {outfitRecommendation.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-ochre">✓</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-song text-3xl text-gray-800 mb-2">用户穿搭秀</h2>
                <p className="text-gray-600">分享你的旅行穿搭灵感</p>
              </div>
              <button
                onClick={() => setShowUploadForm(!showUploadForm)}
                className="px-6 py-3 bg-ochre text-white rounded-full hover:bg-ochre-light transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                上传穿搭
              </button>
            </div>

            {showUploadForm && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="font-song text-2xl text-gray-800 mb-6">分享你的穿搭</h3>
                <form onSubmit={handleUploadOutfit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">城市</label>
                      <select
                        value={newOutfit.city}
                        onChange={(e) => setNewOutfit({ ...newOutfit, city: e.target.value })}
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">描述</label>
                      <input
                        type="text"
                        required
                        value={newOutfit.description}
                        onChange={(e) => setNewOutfit({ ...newOutfit, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                        placeholder="如：海边漫步穿搭"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">图片URL</label>
                    <input
                      type="url"
                      value={newOutfit.image}
                      onChange={(e) => setNewOutfit({ ...newOutfit, image: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-transparent"
                      placeholder="填写图片链接"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-ochre text-white rounded-lg hover:bg-ochre-light transition-colors"
                    >
                      发布
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowUploadForm(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {outfits.map((outfit) => (
                <div
                  key={outfit.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative overflow-hidden">
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
        </div>
      </div>
    </>
  );
}
