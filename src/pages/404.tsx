import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>页面未找到 - 山止川行</title>
      </Head>

      <div className="min-h-screen bg-warm-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="font-song text-9xl text-ochre mb-4">404</div>
          <h1 className="text-3xl font-song text-gray-800 mb-4">页面未找到</h1>
          <p className="text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移除
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-ochre text-white rounded-full hover:bg-ochre-light transition-colors"
          >
            返回首页
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
