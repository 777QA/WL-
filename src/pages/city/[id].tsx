import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { cities, attractions } from '@/data/attractions';
import { guides } from '@/data/guides';

export default function CityDetail() {
  const router = useRouter();
  const { id } = router.query;
  const city = cities.find((c) => c.id === id);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white">
        <div className="text-center">
          <h1 className="text-4xl font-song text-gray-800 mb-4">城市未找到</h1>
          <Link href="/" className="text-ochre hover:text-ochre-light">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const cityAttractions = attractions.filter((attr) => attr.city === city.name);
  const cityGuides = guides.filter((guide) => guide.city === city.name);

  return (
    <>
      <Head>
        <title>{city.name} - 山止川行</title>
        <meta name="description" content={city.description} />
      </Head>

      <div className="min-h-screen bg-warm-white">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-white">
            <h1 className="font-song text-5xl md:text-7xl mb-4">{city.name}</h1>
            <p className="text-xl text-gray-200">{city.pinyin}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16">
            <h2 className="font-song text-3xl text-gray-800 mb-6">城市简介</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{city.description}</p>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-song text-3xl text-gray-800">热门景点</h2>
              <Link
                href="/map"
                className="text-ochre hover:text-ochre-light flex items-center"
              >
                在地图上查看
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityAttractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-song text-xl text-gray-800 mb-2">{attraction.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {cityGuides.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-song text-3xl text-gray-800">相关攻略</h2>
                <Link
                  href="/guides"
                  className="text-ochre hover:text-ochre-light flex items-center"
                >
                  查看更多
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityGuides.slice(0, 4).map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex">
                      <div className="w-1/3">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="font-song text-lg text-gray-800 mb-2 line-clamp-2">{guide.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{guide.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{guide.author}</span>
                          <div className="flex items-center space-x-4">
                            <span>❤ {guide.likes}</span>
                            <span>★ {guide.favorites}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-ink-green text-white rounded-xl p-8 text-center">
            <h3 className="font-song text-2xl mb-4">查看天气和穿搭推荐</h3>
            <p className="mb-6 opacity-90">了解{city.name}的最佳旅行时间和穿搭建议</p>
            <Link
              href="/weather"
              className="inline-flex items-center px-6 py-3 bg-white text-ink-green rounded-full hover:bg-gray-100 transition-colors"
            >
              查看天气穿搭
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
