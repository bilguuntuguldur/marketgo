import dynamic from "next/dynamic";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OneBanner from "@/components/banners/one-banner/one-banner";
import TwoBanner from "@/components/banners/to-banner/to-banner";
import ThreeBanner from "@/components/banners/tree-banner/tree-banner";
import HeroBannerSlider from "@/components/hero-slider/hero-slider";
import BrandsSlider from "@/components/products/bra-products/brands";
import CatProducts from '@/components/products/cat-products/cat-products';
import TabProducts from '@/components/products/tab-products/tat-products';
const ListProductOne = dynamic(() => import('@/components/products/list-products/list-product-one'), { ssr: false });
const ListProductTwo = dynamic(() => import('@/components/products/list-products/list-product-two'), { ssr: false });
import MainCategories from '@/components/categories/categories';
import ProsBox from '@/components/pros-box/pros';


export default function HomePage() {
  return (
    <div className="wrapper">
      <HeroBannerSlider />
      <ProsBox />
      <MainCategories />
      <TwoBanner />
      <ListProductOne categoryId={24} post_per_product={35} />
      <TabProducts />
      <ThreeBanner />
      <ListProductTwo categoryId={59} post_per_product={35} />
      <CatProducts />
      <OneBanner />
      <BrandsSlider />  
    </div>
  );
}
