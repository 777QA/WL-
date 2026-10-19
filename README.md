# 山止川行 - 山东文旅平台

「山止川行」是一个综合性的山东旅游攻略分享平台，集成了景点地图探索、天气穿搭推荐和历史文化展示功能。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm run start
```

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Navbar.tsx       # 隐藏式浮现导航栏
│   ├── Footer.tsx       # 页脚
│   ├── HeroCarousel.tsx # 首页轮播图
│   ├── CityCards.tsx    # 城市卡片
│   ├── FeaturedGuides.tsx # 精选攻略
│   ├── HotAttractions.tsx # 热门景点瀑布流
│   ├── OutfitGallery.tsx  # 穿搭展示
│   ├── MapComponent.tsx    # 地图组件
│   └── SearchModal.tsx    # 搜索弹窗
├── pages/              # Next.js 页面
│   ├── index.tsx       # 首页
│   ├── map.tsx         # 旅游地图
│   ├── guides.tsx      # 攻略广场
│   ├── weather.tsx     # 天气穿搭
│   ├── timeline.tsx    # 历史时间轴
│   ├── city/[id].tsx   # 城市详情页
│   ├── 404.tsx         # 404页面
│   ├── _app.tsx        # 全局布局
│   └── _document.tsx   # HTML文档
├── data/               # 静态数据
│   ├── attractions.ts  # 景点数据
│   ├── guides.ts       # 攻略数据
│   └── timeline.ts     # 时间轴数据
└── styles/
    └── globals.css     # 全局样式
```

## ✨ 功能模块

### 1. 隐藏式浮现导航栏
- 默认透明背景，白色文字
- 鼠标移动到页面顶部100px内时，浮现毛玻璃效果导航栏
- 支持移动端汉堡菜单

### 2. 首页
- 全屏Hero轮播（泰山日出、趵突泉、青岛海滨等）
- 数字指标动画（15.8万km² | 3000+年历史 | 4大城市）
- 四大城市卡片（济南、青岛、临沂、威海）
- 精选攻略横向滚动
- 热门景点瀑布流
- 用户穿搭展示

### 3. 旅游地图
- 使用 Leaflet.js + OpenStreetMap
- 交互式标注主要城市和景点
- 点击弹出信息卡片
- 侧边栏热门景点快捷列表

### 4. 攻略广场
- 发布攻略（标题、正文、图片、城市、昵称）
- 点赞/收藏功能（localStorage 防重复）
- 按城市筛选
- 瀑布流卡片展示

### 5. 天气穿搭
- 城市天气查询
- 根据温度自动推荐穿搭
- 用户上传穿搭照片
- 瀑布流展示

### 6. 历史时间轴
- 纵向滚动沉浸式体验
- 固定左侧时间轴导航
- 滚动时节点同步高亮
- 7个历史时期（史前 → 近现代）
- 移动端顶部横向滑动

### 7. 城市详情页
- 路由 `/city/{id}`
- Hero封面大图
- 城市简介
- 景点列表
- 关联攻略
- 天气快捷入口

### 8. 搜索功能
- 全局搜索弹窗
- 支持搜索城市、景点、攻略
- 实时搜索结果
- ESC键关闭

## 🎨 设计规范

### 色彩
- **主色**: 赭石金 `#8B6914`
- **辅助色**: 墨绿 `#2D5016`
- **背景色**: 暖白 `#FAF8F5` / 纯白 `#FFFFFF`
- **文字色**: 深灰 `#333` / 中灰 `#666`

### 字体
- 标题：思源宋体 (Noto Serif SC)
- 正文：思源黑体 (Noto Sans SC)

### 响应式断点
- `>1024px`: 多列布局
- `768-1024px`: 两列布局
- `<768px`: 单列布局 + 汉堡菜单

## 🛠️ 技术栈

- **框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **地图**: Leaflet.js + react-leaflet
- **图标**: SVG (内联)
- **字体**: Google Fonts (Noto Serif SC, Noto Sans SC)

## 📝 数据管理

- 静态数据存储在 `src/data/` 目录
- 用户生成内容（攻略、穿搭）使用 localStorage
- 点赞/收藏状态使用 localStorage 防重复

## 🔧 环境变量

如需启用真实天气API，请在根目录创建 `.env.local`:

```env
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_api_key
```

## 📱 移动端优化

- 响应式设计
- 触摸友好的交互
- 移动端导航菜单
- 时间轴移动端适配

## 🚀 部署

项目已配置好Vercel部署，只需：

1. Push到GitHub
2. 在Vercel导入项目
3. 自动部署

## 📄 License

MIT
