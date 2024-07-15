"use client";

import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import { fetchProductsByCategory } from "@/utils/wooApi";
import { Product } from "@/types";
import ListProductCard from "../components/cards/list-product-card";
import "./list-product.style.css";

interface ProductProps {
    categoryId: number;
    post_per_product: number;
}

const ListProductTwo: React.FC<ProductProps> = ({ categoryId, post_per_product }) => {
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
                setError('Failed to fetch products');
                console.error(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId, post_per_product]);

    useEffect(() => {
        if (typeof window !== 'undefined' && products.length && carouselRef.current) {
            const $carousel = $(carouselRef.current).find(".listcateSlide");

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
    }, [products]);

    const checkClasses = ($carousel: JQuery<HTMLElement>) => {
        $carousel.each(function () {
            const $this = $(this);
            const total = $this.find(".owl-item.active").length;
            $this.find(".owl-item").removeClass("firstActiveItem lastActiveItem");
            $this.find(".owl-item.active").each(function (index) {
                if (index === 0) $(this).addClass("firstActiveItem");
                if (index === total - 1 && total > 1) $(this).addClass("lastActiveItem");
            });
        });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return (
            <div className='conten-box'>
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
                        <li><a href="#" target="_blank">Kaws Бүтээгдэхүүн</a></li>
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

export default ListProductTwo;
