
import Link from "next/link";
import Image from "next/image";
import "./page.style.css";
import { fetchWooCommerceCategories, fetchWooCommerceCategoriesProduct } from "@/utils/wooApi";
import ProductCard from "@/components/products/components/cards/cat-product-card";
import { Product, Category } from "@/types";
import NextBreadcrumb from "@/components/breadcrumbs/page";
import PriceSlider from "@/components/price-slider/price-slider";

export async function generateStaticParams() {
    try {
        const categories: Category[] = await fetchWooCommerceCategories();
        return categories.map((category: Category) => ({
            slug: category.slug,
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

async function fetchCategoryProducts(categorySlug: string): Promise<{ products: Product[], categoryName: string }> {
    try {
        const categories: Category[] = await fetchWooCommerceCategories();
        const category = categories.find(cat => cat.slug === categorySlug);
        if (category) {
            const products = await fetchWooCommerceCategoriesProduct(category.id);
            return { products, categoryName: category.name };
        }
        return { products: [], categoryName: "" };
    } catch (error) {
        console.error("Error fetching category products:", error);
        return { products: [], categoryName: "" };
    }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    try {
        const { products, categoryName } = await fetchCategoryProducts(params.slug);
        if (!products.length) {
            return (
                <div className="conten-box">
                    <div className="flex flex-col gap-16 my-16 p-16 lg:flex-row lg:items-center">
                        <h1 className="text-3xl font-bold">Ангилалд бүтээгдэхүүн байхгүй байна</h1>
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
                                    activeClasses='main_color'
                                    containerClasses='flex'
                                    listClasses='hover:underline mx-2 font-bold'
                                    capitalizeLinks
                                />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="conten-box">
                    <div className="row">
                        <div id="left-column" className="col-xs-12 col-sm-4 col-md-3">
                            <div className="block-categories hidden-sm-down">
                                <ul className="category-top-menu">
                                    <li>
                                        <Link className="text-uppercase h6" href="#">{categoryName}</Link>
                                    </li>
                                    <li>
                                        <ul className="category-sub-menu">
                                            <li data-depth="0">
                                                <Link href="#">Name of sub-category</Link>
                                                <div className="navbar-toggler collapse-icons collapsed" data-toggle="collapse">
                                                    <Image src="/images/icons/plus.png" alt="arrow-down" width={10} height={10} className="add"/>
                                                    <Image src="/images/icons/minus.png" alt="arrow-up" width={10} height={10} className="remove"/>
                                                </div>
                                                <div className="collapse" style={{}}>
                                                    <ul className="category-sub-menu">
                                                        <li data-depth="1">
                                                            <Link className="category-sub-link" href="#">Name of sub-category items sub category</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div id="search_filters_wrapper" className="hidden-sm-down">
                                <div id="search_filters">
                                    <section className="facet clearfix">
                                        <p className="h6 facet-title hidden-sm-down">Размер</p>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">S</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">M</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">L</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">XL</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <p className="h6 facet-title hidden-sm-down">Өнгө</p>
                                        <div className="title hidden-md-up">
                                            <p className="h6 facet-title">Өнгө</p>
                                        </div>
                                        <ul className="color-boxs">
                                            <li className="flex mb-2">
                                                <span className="color-box" style={{ background: '#ffffff' }}></span>
                                                <span className="ml-2 text-sm">Цагаан</span>
                                                <span className="ml-2 text-sm">(4)</span>
                                            </li>
                                            <li className="flex mb-2">
                                                <span className="color-box" style={{ background: '#000000' }}></span>
                                                <span className="ml-2 text-sm">Хар</span>
                                                <span className="ml-2 text-sm">(4)</span>
                                            </li>
                                            <li className="flex mb-2">
                                                <span className="color-box" style={{ background: '#fedc19' }}></span>
                                                <span className="ml-2 text-sm">Шар</span>
                                                <span className="ml-2 text-sm">(4)</span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <p className="h6 facet-title hidden-sm-down">Үнэ</p>
                                        <div className="title hidden-md-up">
                                            <p className="h6 facet-title">Үнэ</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <p className="text-sm">15.000₮ - 1.500.000₮</p>
                                            </li>
                                            <PriceSlider />
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <p className="h6 facet-title hidden-sm-down">Хэмжээ</p>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">40x60cm</span>
                                                <span className="ml-2 text-sm">(2)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">60x90cm</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">80x120cm</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="ml-2 text-sm">100x150cm</span>
                                                <span className="ml-2 text-sm">(12)</span>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="advertising">
                                <Link href="#">
                                    <Image
                                        src="/images/banner/advertising.jpg"
                                        alt="advertising"
                                        className="img-responsive"
                                        width={300}
                                        height={250}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="left-column col-xs-12 col-sm-8 col-md-9">
                            <section id="main">
                                <div className="block-category card card-block hidden-sm-down">
                                    <div className="block-category card card-block hidden-sm-down">
                                        <h1 className="h1">{categoryName}</h1>
                                    </div>
                                    <div className="category-cover">
                                        <Image src="/images/cover/category-cover.jpg"
                                            alt="Camera"
                                            className="category-cover"
                                            width={1200} height={300}
                                        />
                                    </div>
                                </div>
                                <div className="hidden-md-up">
                                    <h1 className="h1">{categoryName}</h1>
                                </div>
                                <section id="products-list">
                                    <div id="">
                                        <div id="js-product-list-top" className="products-selection">
                                            <div className="row">
                                                <div className="col-md-6 hidden-sm-down total-products">
                                                    {/* <ul className="display hidden-xs">
                                                        <li id="grid">
                                                            <Link href="#" title="Grid" className="flex items-center justify-center">
                                                                <Image 
                                                                    src="/images/icons/grid.png"
                                                                    alt="icons"
                                                                    width={25}
                                                                    height={25}
                                                                    className="inline-block"
                                                                />
                                                                <span>Grid</span>
                                                            </Link>
                                                        </li>
                                                        <li id="list">
                                                            <Link href="#" title="List" className="flex items-center justify-center">
                                                                <Image 
                                                                    src="/images/icons/list.png"
                                                                    alt="icons"
                                                                    width={25}
                                                                    height={25}
                                                                    className="inline-block"
                                                                />
                                                                <span>List</span>
                                                            </Link>
                                                        </li> 
                                                    </ul> */}
                                                    <p>Бүгд {products.length} бүтээгдэхүүн.</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row sort-by-row">
                                                        <span className="col-sm-3 col-md-3 hidden-sm-down sort-by">Эрэмбэлэх:</span>
                                                        <div className="col-sm-6 col-xs-8 col-md-9">
                                                            <select
                                                                id="products-sort-order"
                                                                className="filter-select-form"
                                                                name="products-sort-order"
                                                            >
                                                                <option value="position">A-Z</option>
                                                                <option value="name">Z-A</option>
                                                                <option value="price">Үнэтэй - Хямд</option>
                                                                <option value="price">Хямд - Үнэтэй</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-12 hidden-md-up  showing">
                                                            Showing 1-{products.length} of {products.length} item(s)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="" className="hidden-sm-down">
                                        <section id="js-active-search-filters" className="hide">
                                            <p className="h6 hidden-xs-up">Active filters</p>
                                        </section>
                                    </div>
                                    <div id="">
                                        <div >
                                            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                                                {products.map((product) => (
                                                    <ProductCard key={product.id} product={product} />
                                                ))}
                                            </div>
                                            <nav className="pagination">
                                                <div className="col-md-4">
                                                    Нийт {products.length} бүтээгдэхүүнээс {products.length} бүтээгдэхүүн
                                                </div>
                                                <div className="col-md-6 offset-md-2 pr-0">
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div id="js-product-list-bottom">
                                        <div id="js-product-list-bottom"></div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error rendering category page:", error);
        return (
            <div className="conten-box">
                <div className="flex flex-col gap-16 my-16 p-16 lg:flex-row lg:items-center">
                    <h1 className="text-3xl font-bold">Уучлаарай, алдаа гарлаа</h1>
                </div>
            </div>
        );
    }
}
