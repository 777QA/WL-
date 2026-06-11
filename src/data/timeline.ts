export interface TimelinePeriod {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  image: string;
}

export const timelineData: TimelinePeriod[] = [
  {
    id: 'prehistoric',
    title: '史前文明',
    period: '约10万年前 - 公元前1046年',
    description: '山东是中华文明的重要发源地之一，早在远古时期就有人类在此繁衍生息。东夷文化、大汶口文化、龙山文化等相继兴起，创造了灿烂的史前文明。',
    highlights: ['大汶口文化遗址', '龙山文化黑陶', '东夷部落联盟', '蛋壳陶工艺'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  },
  {
    id: 'zhou-spring-autumn',
    title: '西周春秋',
    period: '公元前1046年 - 公元前476年',
    description: '周朝建立后，山东地区分为齐国和鲁国。齐国经济发达，鲁国文化昌盛。孔子诞生于鲁国，创立儒家学派，对中国文化产生深远影响。',
    highlights: ['姜太公封齐', '周公旦封鲁', '孔子与儒学', '稷下学宫'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
  },
  {
    id: 'qin-han',
    title: '秦汉时期',
    period: '公元前221年 - 公元220年',
    description: '秦始皇统一中国后，山东成为秦帝国的重要组成部分。汉武帝时期，泰山成为历代帝王封禅的圣地，象征着皇权的神圣。',
    highlights: ['秦始皇东巡', '泰山封禅', '独尊儒术', '丝绸之路东方起点'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
  },
  {
    id: 'sui-tang',
    title: '隋唐盛世',
    period: '公元581年 - 公元907年',
    description: '隋唐时期，山东经济文化空前繁荣。大运河的开通促进了南北交流，李白、杜甫等著名诗人都曾在山东留下足迹和诗篇。',
    highlights: ['大运河开通', '李白杜甫游山东', '佛教文化兴盛', '登州港对外贸易'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
  },
  {
    id: 'song-yuan',
    title: '宋元时期',
    period: '公元960年 - 公元1368年',
    description: '宋代山东文化艺术达到鼎盛，李清照、辛弃疾等著名词人诞生于此。《水浒传》故事背景也发生在山东，反映了当时的社会风貌。',
    highlights: ['李清照与辛弃疾', '《水浒传》故事', '全真教兴起', '海运贸易发达'],
    image: 'https://images.unsplash.com/photo-1523307891476-40c646be55af?w=800'
  },
  {
    id: 'ming-qing',
    title: '明清时期',
    period: '公元1368年 - 公元1912年',
    description: '明清时期，山东继续保持文化重镇的地位。蒲松龄创作《聊斋志异》，孔尚任写出《桃花扇》，这些作品成为中国文学史上的经典。',
    highlights: ['蒲松龄与《聊斋志异》', '孔尚任与《桃花扇》', '运河漕运繁荣', '曲阜孔庙扩建'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
  },
  {
    id: 'modern',
    title: '近现代',
    period: '公元1840年 - 至今',
    description: '近代以来，山东经历了诸多重大历史事件。甲午战争、青岛开埠、沂蒙精神等都深刻影响了中国近代史的进程。',
    highlights: ['甲午战争', '青岛开埠', '五四运动源头', '沂蒙精神'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  }
];
