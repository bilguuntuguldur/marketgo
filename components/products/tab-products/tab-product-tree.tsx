"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { fetchProductsByCategory } from "@/utils/wooApi";
import CatProductCard from "../components/cards/cat-product-card";


interface ProductProps {
    categoryId: number;
    post_per_product: number;
}

const TabProductThree: React.FC<ProductProps> = ({ categoryId, post_per_product }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    if (error) {
        return <div className="conten-box">Алдаа: {error}</div>;
    }

    if (loading) {
        return (
            <div className='conten-box'>
                <p>Түр хүлээнэ үү...</p>
            </div>
        );
    }

    return (
        <div id="tab_feature_product" className="tab_content animatetab">
            <div className="productTabContent2 productTab">
                <div className="img">
                    <div className="img_modun">
                        <div className="banner-box"><a href="#"> <Image src="/images/banner/img_modun.jpg" alt="simply-alt-text" className="img-responsive" width={450} height={440} /></a></div>
                    </div>
                </div>
                {products.map((product) => (
                    <CatProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );

};

export default TabProductThree;