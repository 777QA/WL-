import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-song text-2xl text-ochre mb-4">山止川行</h3>
            <p className="text-gray-400 mb-4">
              探索山东之美，感受齐鲁文化。让每一次旅行都成为难忘的记忆。
            </p>
            <p className="text-gray-500 text-sm">
              「山止川行」取自《史记·孔子世家》，寓意坚定不移、勇往直前的精神。
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-ochre transition-colors">首页</Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-400 hover:text-ochre transition-colors">旅游地图</Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-ochre transition-colors">攻略广场</Link>
              </li>
              <li>
                <Link href="/weather" className="text-gray-400 hover:text-ochre transition-colors">天气穿搭</Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-ochre transition-colors">历史时间轴</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@shanzhi-chuanxing.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                400-888-8888
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            {currentYear} 山止川行 - 山东文旅平台. 保留所有权利.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">隐私政策</span>
            <span className="text-gray-500 text-sm">使用条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
