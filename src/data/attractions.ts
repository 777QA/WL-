export interface Attraction {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
  image: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  pinyin: string;
  description: string;
  image: string;
  attractions: string[];
}

export const cities: City[] = [
  {
    id: 'jinan',
    name: '济南',
    pinyin: 'Jinan',
    description: '泉城济南，以七十二名泉闻名天下，趵突泉、大明湖、千佛山构成了济南的三大名胜。',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    attractions: ['baotu-spring', 'daming-lake', 'qianfo-mountain']
  },
  {
    id: 'qingdao',
    name: '青岛',
    pinyin: 'Qingdao',
    description: '海滨城市青岛，红瓦绿树、碧海蓝天，是中国著名的旅游度假胜地和啤酒之都。',
    image: 'https://images.unsplash.com/photo-1523307891476-40c646be55af?w=800',
    attractions: ['badaguan', 'laoshan', 'qingdao-beach']
  },
  {
    id: 'linyi',
    name: '临沂',
    pinyin: 'Linyi',
    description: '临沂古称琅琊，是东夷文化的重要发祥地，拥有壮丽的沂蒙山风光和丰富的红色文化。',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    attractions: ['yimeng-mountain', 'mengshan', 'zhuang-lake']
  },
  {
    id: 'weihai',
    name: '威海',
    pinyin: 'Weihai',
    description: '威海是中国大陆距离日本、韩国最近的城市，拥有美丽的海滨风光和丰富的海鲜资源。',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    attractions: ['weihai-park', 'liugong-island', 'chengshantou']
  }
];

export const attractions: Attraction[] = [
  {
    id: 'baotu-spring',
    name: '趵突泉',
    city: '济南',
    lat: 36.6697,
    lng: 117.0176,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
    description: '济南三大名胜之一，被誉为"天下第一泉"，泉水清澈见底，常年恒温18℃。'
  },
  {
    id: 'daming-lake',
    name: '大明湖',
    city: '济南',
    lat: 36.6685,
    lng: 117.0239,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    description: '济南三大名胜之一，湖水面积46.5公顷，是济南城内的天然湖泊。'
  },
  {
    id: 'qianfo-mountain',
    name: '千佛山',
    city: '济南',
    lat: 36.6482,
    lng: 117.0496,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    description: '济南三大名胜之一，山上有众多佛像石刻，是市民休闲登山的好去处。'
  },
  {
    id: 'badaguan',
    name: '八大关',
    city: '青岛',
    lat: 36.0671,
    lng: 120.3431,
    image: 'https://images.unsplash.com/photo-1523307891476-40c646be55af?w=400',
    description: '青岛著名的风景疗养区，八条以关隘命名的街道，两旁种植着不同的树木。'
  },
  {
    id: 'laoshan',
    name: '崂山',
    city: '青岛',
    lat: 36.1558,
    lng: 120.6745,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    description: '中国海岸线第一高峰，山海相连，风景秀丽，是著名的道教圣地。'
  },
  {
    id: 'qingdao-beach',
    name: '青岛海滨浴场',
    city: '青岛',
    lat: 36.0587,
    lng: 120.3826,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    description: '亚洲最大的海水浴场之一，沙细水清，是夏季避暑的绝佳去处。'
  },
  {
    id: 'yimeng-mountain',
    name: '沂蒙山',
    city: '临沂',
    lat: 35.7176,
    lng: 117.9758,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    description: '国家5A级景区，以其壮丽的自然风光和丰富的红色文化而闻名。'
  },
  {
    id: 'mengshan',
    name: '蒙山',
    city: '临沂',
    lat: 35.6447,
    lng: 117.9519,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    description: '山东第二高峰，被誉为"天然氧吧"，森林覆盖率达98%以上。'
  },
  {
    id: 'zhuang-lake',
    name: '庄里水库',
    city: '临沂',
    lat: 35.1721,
    lng: 118.0469,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    description: '山东省第二大水库，水域面积广阔，是休闲垂钓的好去处。'
  },
  {
    id: 'weihai-park',
    name: '威海公园',
    city: '威海',
    lat: 37.5069,
    lng: 122.1563,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    description: '海滨公园，拥有美丽的海岸线和标志性的"幸福门"建筑。'
  },
  {
    id: 'liugong-island',
    name: '刘公岛',
    city: '威海',
    lat: 37.5132,
    lng: 122.1789,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    description: '甲午战争纪念地，岛上有众多历史遗迹和自然景观。'
  },
  {
    id: 'chengshantou',
    name: '成山头',
    city: '威海',
    lat: 37.3264,
    lng: 122.5783,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    description: '中国海岸线最东端，被誉为"天尽头"，是观日出的绝佳地点。'
  },
  {
    id: 'taishan',
    name: '泰山',
    city: '泰安',
    lat: 36.2607,
    lng: 117.1549,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    description: '五岳之首，世界文化与自然双重遗产，历代帝王封禅之地。'
  },
  {
    id: 'qufu',
    name: '曲阜三孔',
    city: '济宁',
    lat: 35.5973,
    lng: 116.9807,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    description: '孔庙、孔府、孔林，是中国历代纪念孔子、推崇儒学的圣地。'
  }
];
