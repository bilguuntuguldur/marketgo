import { Metadata } from "next";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./page.style.css";
import Container from "@/components/ui/container";
import { fetchWooCommerceProducts } from "@/utils/wooApi";
import ImageSlider from "@/components/products/components/details/image-slider";
import Details from "@/components/products/components/details/details";
import ProductTabDesc from "@/components/products/components/details/product-tab-desc";
import RelateddProduct from "@/components/products/rel-products/rel-product";
import { Product } from "@/types";
import NextBreadcrumb from "@/components/breadcrumbs/page";

// Generate static paths for all products
export async function generateStaticParams() {
    const products = await fetchWooCommerceProducts();
    return products.map((product: Product) => ({
        id: product.id.toString(),
    }));
}

async function fetchProduct(slug: string): Promise<Product | undefined> {
    const products = await fetchWooCommerceProducts();
    return products.find((product: Product) => product.slug === slug);
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await fetchProduct(params.id);

    if (!product) {
        return (
            <div className="conten-box">
                <div className="flex flex-col gap-16 my-16 p-16 lg:flex-row lg:items-center">
                    <h1 className="text-3xl font-bold">Бүтээгдэхүүн олдсонгүй</h1>
                </div>
            </div>
        );
    }

    return (
        <div>
                <div className="breadcrumb">
                    <div className="conten-box">
                        <div className="breadcrumb_container">
                            <nav className="breadcrumb-inner">
                                <NextBreadcrumb
                                    homeElement={'Home'}
                                    separator={<span> / </span>}
                                    activeClasses='main_green'
                                    containerClasses='flex'
                                    listClasses='hover:underline mx-2 font-bold text-sm uppercase main_gray'
                                    capitalizeLinks
                                />
                            </nav>
                        </div>
                    </div>
                </div>
            <Container>
                <div className="row">
                    <div id="content-wrapper" className="col-xs-12">
                        <section id="main">
                            <div className="row">
                                <ImageSlider data={product} />
                                <Details data={product} />
                            </div>
                            <div className="row">
                                <ProductTabDesc data={product}/>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="categoryproducts">
                    <div className="pos_title">
                        <h2>Төстэй Бүтээгдэхүүнүүд</h2>
                    </div>
                    <div className="block-content">
                        <div className="row pos_content">
                            <RelateddProduct />
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}
