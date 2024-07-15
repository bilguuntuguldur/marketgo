"use client";

import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "@/utils/wooApi";
import { Product } from "@/types";
import CatProductCard from "../components/cards/cat-product-card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface ProductProps {
    categoryId: number;
    post_per_product: number;
}

const CatProductThree: React.FC<ProductProps> = ({
    categoryId,
    post_per_product,
}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await fetchProductsByCategory(
                    categoryId,
                    post_per_product
                );
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                console.error(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId, post_per_product]);

    useEffect(() => {
        const initializeCarousel = async () => {
            if (typeof window !== "undefined" && !loading && products.length) {
                const jQuery = (await import("jquery")).default;
                await import("owl.carousel");

                const $tabcateSlideConf = jQuery(".tab-category-container-slider");
                let autoPlay = parseInt($tabcateSlideConf.attr("data-autoplay") || "0");
                const time = parseInt($tabcateSlideConf.attr("data-time") || "3000");
                const arrow = parseInt($tabcateSlideConf.attr("data-arrow") || "0");
                const pagination = parseInt(
                    $tabcateSlideConf.attr("data-pagination") || "0"
                );
                const pausehover = parseInt(
                    $tabcateSlideConf.attr("data-pausehover") || "0"
                );
                const xs = parseInt($tabcateSlideConf.attr("data-xs") || "1");
                const xxs = parseInt($tabcateSlideConf.attr("data-xxs") || "1");

                if (autoPlay === 1) {
                    autoPlay = time || 3000;
                } else {
                    autoPlay = 0;
                }

                jQuery(".tab-category-container-slider .productTabCategorySlider").owlCarousel(
                    {
                        autoplay: !!autoPlay,
                        smartSpeed: 1000,
                        autoplayHoverPause: !!pausehover,
                        nav: !!arrow,
                        dots: !!pagination,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: xxs,
                            },
                            480: {
                                items: xs,
                            },
                            768: {
                                items: 3,
                                nav: false,
                            },
                            992: {
                                items: 4,
                            },
                            1200: {
                                items: 5,
                            },
                            1400: {
                                items: 6,
                            },
                            1600: {
                                items: 7,
                            },
                            1920: {
                                items: 7,
                            },
                        },
                    }
                );

                jQuery(".tab_category").hide();
                jQuery(".tab_category:first").show();

                jQuery("ul.tab_cates li").click(function () {
                    jQuery("ul.tab_cates li").removeClass("active");
                    jQuery(this).addClass("active");
                    jQuery(".tab_category").hide();
                    const activeTab = jQuery(this).attr("rel");
                    jQuery("#" + activeTab)
                        .fadeIn()
                        .addClass("animatetab");
                });
            }
        };

        initializeCarousel();
    }, [loading, products]);

    if (error) {
        return <div className="conten-box">Алдаа: {error}</div>;
    }

    if (loading) {
        return (
            <div className="conten-box">
                <p>Түр хүлээнэ үү...</p>
            </div>
        );
    }

    return (
        <div id="tab_37" className="tab_category">
            <div className="productTabCategorySlider owl-carousel">
                {products.map((product) => (
                    <CatProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CatProductThree;
