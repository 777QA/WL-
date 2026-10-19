import Head from 'next/head';
import HeroCarousel from '@/components/HeroCarousel';
import CityCards from '@/components/CityCards';
import FeaturedGuides from '@/components/FeaturedGuides';
import HotAttractions from '@/components/HotAttractions';
import OutfitGallery from '@/components/OutfitGallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>山止川行 - 山东文旅平台</title>
        <meta name="description" content="探索山东之美，感受齐鲁文化。让每一次旅行都成为难忘的记忆。" />
      </Head>

      <div>
        <HeroCarousel />
        <CityCards />
        <FeaturedGuides />
        <HotAttractions />
        <OutfitGallery />
      </div>
    </>
  );
}
