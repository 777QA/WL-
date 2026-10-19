export interface Guide {
  id: string;
  title: string;
  content: string;
  image: string;
  city: string;
  author: string;
  createdAt: string;
  likes: number;
  favorites: number;
  comments: string[];
}

export const guides: Guide[] = [
  {
    id: '1',
    title: '济南一日游攻略：泉城深度体验',
    content: '早上从趵突泉开始，感受天下第一泉的魅力。中午在泉城广场附近品尝地道鲁菜。下午游览大明湖，感受"四面荷花三面柳"的意境。晚上可以去宽厚里品尝济南小吃。',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
    city: '济南',
    author: '旅行达人',
    createdAt: '2024-01-15',
    likes: 128,
    favorites: 45,
    comments: ['攻略很实用！', '收藏了，下次去济南就靠它了']
  },
  {
    id: '2',
    title: '青岛三日游：红瓦绿树，碧海蓝天',
    content: '第一天：八大关、栈桥、五四广场。第二天：崂山风景区，感受山海相连的壮丽景色。第三天：青岛啤酒博物馆、石老人海水浴场。记得品尝青岛海鲜和啤酒！',
    image: 'https://images.unsplash.com/photo-1523307891476-40c646be55af?w=400',
    city: '青岛',
    author: '海边漫步',
    createdAt: '2024-01-10',
    likes: 256,
    favorites: 89,
    comments: ['太棒了，正准备去青岛']
  },
  {
    id: '3',
    title: '沂蒙山红色之旅：重温革命历史',
    content: '参观孟良崮战役纪念馆，了解沂蒙精神的深刻内涵。徒步蒙山，感受大自然的壮丽。晚上可以体验农家院，品尝地道的沂蒙美食。',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    city: '临沂',
    author: '红色记忆',
    createdAt: '2024-01-08',
    likes: 89,
    favorites: 32,
    comments: []
  },
  {
    id: '4',
    title: '威海两日游：浪漫海滨之旅',
    content: '第一天：威海公园、幸福门、韩国城。第二天：刘公岛一日游，了解甲午战争历史。威海的海鲜非常新鲜，一定要尝尝！',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    city: '威海',
    author: '海风轻吹',
    createdAt: '2024-01-05',
    likes: 167,
    favorites: 56,
    comments: ['刘公岛值得一去']
  },
  {
    id: '5',
    title: '泰山登山攻略：夜爬泰山看日出',
    content: '晚上11点开始登山，大约5-6小时到达山顶。记得带好手电筒和保暖衣物。在玉皇顶等待日出，感受"一览众山小"的豪情。',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    city: '泰安',
    author: '登山爱好者',
    createdAt: '2024-01-03',
    likes: 312,
    favorites: 123,
    comments: ['夜爬真的很累，但看到日出那一刻觉得值了']
  },
  {
    id: '6',
    title: '曲阜文化之旅：探寻儒家根源',
    content: '参观孔庙、孔府、孔林，感受中国传统文化的博大精深。建议请一位讲解员，能更好地了解历史背景。附近的尼山圣境也值得一去。',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    city: '济宁',
    author: '文化探索者',
    createdAt: '2024-01-01',
    likes: 145,
    favorites: 67,
    comments: ['带孩子去很有教育意义']
  }
];
