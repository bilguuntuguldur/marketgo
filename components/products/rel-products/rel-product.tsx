"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import RelatedProductCard from "@/components/products/components/cards/rel-product-card";
import { fetchWooCommerceProducts } from "@/utils/wooApi";
import { Product } from "@/types";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const RelateddProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProducts = await fetchWooCommerceProducts();
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="conten-box">Түр хүлэнэ үү...</div>
            ) : (
                <OwlCarousel
                    className="product_categoryslide owl-carousel"
                    loop
                    margin={10}
                    nav
                    dots={false}
                    responsive={{
                        0: { items: 1 },
                        480: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 6 }
                    }}
                    smartSpeed={1000}
                    autoplayHoverPause={true}
                >
                    {products.map((product) => (
                        <RelatedProductCard key={product.id} product={product} />
                    ))}
                </OwlCarousel>
            )}
        </div>
    );
};

export default RelateddProduct;
