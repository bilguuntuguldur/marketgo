"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { fetchProductsByCategory } from "@/utils/wooApi";
import { Product } from "@/types";
import ListProductCard from "@/components/products/components/cards/list-product-card";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

interface ProductProps {
    categoryId: number;
    post_per_product: number;
}
const BrandOneProduct: React.FC<ProductProps> = ({ categoryId, post_per_product }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProducts = await fetchProductsByCategory(categoryId, post_per_product);
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [categoryId, post_per_product]);

    return (

        <div id="tab_1" className="manu_facturer_tab">
            {loading ? (
                <div className="conten-box">Түр хүлэнэ үү...</div>
            ) : (
                <OwlCarousel
                    className="manu-item_1 owl-carousel"
                    loop
                    margin={10}
                    nav
                    dots={false}
                    responsive={{
                        0: { items: 1 },
                        480: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 6 },
                        1920: { items: 7 }
                    }}
                    smartSpeed={1000}
                    autoplayHoverPause={true}
                >
                    {products.map((product) => (
                        <ListProductCard key={product.id} product={product} />
                    ))}
                </OwlCarousel>
            )}
        </div>
    );

};

export default BrandOneProduct;
