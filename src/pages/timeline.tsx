import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { timelineData } from '@/data/timeline';

export default function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>历史时间轴 - 山止川行</title>
        <meta name="description" content="探索山东3000年历史文化，了解齐鲁大地的悠久历史" />
      </Head>

      <div className="min-h-screen bg-warm-white">
        <div className="text-center py-16 bg-gradient-to-r from-ochre/10 to-ink-green/10">
          <h1 className="font-song text-4xl md:text-6xl text-gray-800 mb-4">齐鲁历史长河</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            穿越3000年时光，感受山东大地的历史沧桑与文化底蕴
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 hidden lg:block">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />
                  <div className="space-y-8">
                    {timelineData.map((period, index) => (
                      <button
                        key={period.id}
                        onClick={() => scrollToSection(index)}
                        className={`relative transform -translate-x-1/2 transition-all duration-300 ${
                          activeIndex === index
                            ? 'scale-125'
                            : 'hover:scale-110'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                            activeIndex === index
                              ? 'bg-ochre border-ochre scale-125'
                              : index < activeIndex
                              ? 'bg-gray-700 border-gray-700'
                              : 'bg-white border-gray-300 hover:border-ochre'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:hidden mb-8">
                <div className="flex overflow-x-auto space-x-2 pb-4 scrollbar-hide">
                  {timelineData.map((period, index) => (
                    <button
                      key={period.id}
                      onClick={() => scrollToSection(index)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full transition-colors ${
                        activeIndex === index
                          ? 'bg-ochre text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {period.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-11">
              {timelineData.map((period, index) => (
                <section
                  key={period.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="min-h-screen flex items-center py-16"
                >
                  <div
                    className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={period.image}
                            alt={period.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-ochre text-white text-sm rounded-full mb-2">
                              {period.period}
                            </span>
                            <h2 className="font-song text-3xl text-white">
                              {period.title}
                            </h2>
                          </div>
                        </div>
                        <div className="p-8">
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {period.description}
                          </p>
                          <div className="space-y-3">
                            <h3 className="font-medium text-gray-800 text-lg">历史亮点</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {period.highlights.map((highlight, i) => (
                                <div
                                  key={i}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="text-ochre mt-1">◆</span>
                                  <span className="text-sm text-gray-700">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="lg:pl-12">
                        <div className="bg-gradient-to-br from-ochre/5 to-ink-green/5 rounded-2xl p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-ochre/10 rounded-full flex items-center justify-center">
                              <span className="text-3xl font-bold text-ochre">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">历史时期</div>
                              <div className="text-lg font-medium text-gray-800">
                                {period.period}
                              </div>
                            </div>
                          </div>
                          <h3 className="font-song text-2xl text-gray-800 mb-4">
                            {period.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {period.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-ink-green text-white rounded-2xl p-12 text-center">
            <h2 className="font-song text-3xl mb-4">探索更多山东之美</h2>
            <p className="text-lg opacity-90 mb-8">
              历史的沉淀赋予了山东独特的文化魅力，等待你来发现
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/map"
                className="px-6 py-3 bg-white text-ink-green rounded-full hover:bg-gray-100 transition-colors"
              >
                查看旅游地图
              </a>
              <a
                href="/guides"
                className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                阅读旅行攻略
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
