
"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { fetchProductsByCategory } from "@/utils/wooApi";
import { Product } from "@/types";
import ListProductCard from "../components/cards/list-product-card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./list-product.style.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

interface ProductProps {
    categoryId: number;
    post_per_product: number;
}

const ListProductOne: React.FC<ProductProps> = ({ categoryId, post_per_product }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await fetchProductsByCategory(categoryId, post_per_product);
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
            if (typeof window !== "undefined" && products.length && carouselRef.current) {
                const { default: jQuery } = await import("jquery");
                await import("owl.carousel");

                window.$ = window.jQuery = jQuery;

                const $carousel = jQuery(carouselRef.current).find(".listcateSlide");

                $carousel.owlCarousel({
                    autoplay: false,
                    smartSpeed: 1000,
                    autoplayHoverPause: true,
                    nav: true,
                    dots: false,
                    responsive: {
                        0: { items: 1 },
                        480: { items: 2 },
                        768: { items: 3, nav: false },
                        992: { items: 4 },
                        1200: { items: 4 },
                    },
                });

                checkClasses($carousel);

                $carousel.on("translated.owl.carousel", function () {
                    checkClasses($carousel);
                });
            }
        };

        initializeCarousel();
    }, [products]);

    const checkClasses = ($carousel: JQuery<HTMLElement>) => {
        $carousel.each(function () {
            const $this = window.$(this);
            const total = $this.find(".owl-item.active").length;
            $this.find(".owl-item").removeClass("firstActiveItem lastActiveItem");
            $this.find(".owl-item.active").each(function (index) {
                if (index === 0) window.$(this).addClass("firstActiveItem");
                if (index === total - 1 && total > 1) window.$(this).addClass("lastActiveItem");
            });
        });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return (
            <div className="conten-box">
                <p>Түр хүлээнэ үү...</p>
            </div>
        );
    }

    return (
        <div className="conten-box">
            <div
                className="poslistcateproduct poslistcateproduct_0 product_container"
                data-items="4"
                data-speed="1000"
                data-autoplay="0"
                data-time="0"
                data-arrow="1"
                data-pagination="0"
                data-move="0"
                data-pausehover="0"
                data-md="3"
                data-sm="2"
                data-xs="2"
                data-xxs="1"
                ref={carouselRef}
            >
                <div className="pos_title">
                    <ul className="subcategories-list">
                        <li><a href="#" target="_blank">HdeFxxx бүтээгдэхүүн</a></li>
                    </ul>
                </div>

                <div className="listcateproduct-products">
                    <div className="pos-content row">
                        <div className="listcateSlide owl-carousel">
                            {products.map((product) => (
                                <ListProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductOne;
