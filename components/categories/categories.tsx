"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';
import './categories.style.css';
import { fetchWooCommerceCategories } from '@/utils/wooApi';

// Dynamic import for jQuery
const $ = dynamic(() => import('jquery'), { ssr: false });

const MainCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWooCommerceCategories();
                setCategories(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An unknown error occurred');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const initializeCarousel = async () => {
            const jQuery = (await import('jquery')).default;
            await import('owl.carousel');

            if (categories.length > 0) {
                jQuery(".poslistcategories .block_content").owlCarousel({
                    autoplay: false,
                    smartSpeed: 1000,
                    nav: true,
                    dots: false,
                    responsive: {
                        0: { items: 1 },
                        480: { items: 2 },
                        768: { items: 2 },
                        992: { items: 3 },
                        1200: { items: 4 }
                    }
                });
            }
        };

        initializeCarousel();
    }, [categories]);

    const groupedCategories = [];
    for (let i = 0; i < categories.length; i += 2) {
        groupedCategories.push(categories.slice(i, i + 2));
    }

    return (
        <div className='conten-box'>
            <div className="poslistcategories pos_content">
                <div className="pos_title">
                    <h2>Үндсэн <span className="t1">Ангилалууд</span></h2>
                </div>

                <div className="row">
                    <div className="block_content owl-carousel">
                        {groupedCategories.map((group, index) => (
                            <div key={index} className="item-listcategories">
                                {group.map(category => (
                                    <div key={category.id} className="list-categories">
                                        <div className="thumb-category">
                                            <Link href={`/categories/${category.slug}`}>
                                                {category.image && (
                                                    <Image src={category.image.src} alt={category.image.alt} width={150} height={200} />
                                                )}
                                            </Link>
                                        </div>
                                        <div className="desc-listcategoreis">
                                            <div className="name_categories">
                                                <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                                            </div>
                                            <span className="number_product">{category.count}ш Бүтээгдэхүүн</span>
                                            <div className="see-more">
                                                <Link href={`/categories/${category.slug}`}>
                                                    Дэлгүүр орох<i className="ion ion-android-arrow-dropright"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCategories;
