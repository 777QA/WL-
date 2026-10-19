import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { attractions } from '@/data/attractions';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

export default function MapPage() {
  return (
    <>
      <Head>
        <title>旅游地图 - 山止川行</title>
        <meta name="description" content="探索山东旅游地图，发现热门景点和城市" />
      </Head>

      <div className="min-h-screen bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-song text-4xl md:text-5xl text-gray-800 mb-4">山东旅游地图</h1>
            <p className="text-lg text-gray-600">点击标记查看景点详情，开启你的山东之旅</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-[600px]">
                  <MapComponent attractions={attractions} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="font-song text-2xl text-gray-800 mb-6">热门景点</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {attractions.map((attraction) => (
                    <div
                      key={attraction.id}
                      className="group cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={attraction.image}
                            alt={attraction.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 group-hover:text-ochre transition-colors">
                            {attraction.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{attraction.city}</p>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {attraction.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
