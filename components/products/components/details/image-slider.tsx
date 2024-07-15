"use client";

import Image from "next/image";
import { Product } from "@/types";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

interface DetailsProps {
    data: Product;
}

const ImageSlider = ({ data: product }: DetailsProps) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        script.async = true;
        script.onload = () => {
            const owlScript = document.createElement('script');
            owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
            owlScript.async = true;
            document.body.appendChild(owlScript);
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="col-md-5">
            <section className="page-content" id="content">
                <div className="image-container">
                    <div className="js-qv-mask mask pos_content">
                        <OwlCarousel
                            className="product-images js-qv-product-images owl-carousel"
                            loop
                            animateOut="fadeOut"
                            animateIn="fadeIn"
                            smartSpeed={1000}
                            autoplayHoverPause
                            nav
                            dots={false}
                            responsive={{
                                0: { items: 0 },
                                480: { items: 1 },
                                768: { items: 2, nav: false },
                                992: { items: 3 },
                                1200: { items: 4 }
                            }}
                        >
                            {product.images.map((image, index) => (
                                <div className="thumb-container" key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt || "product image"}
                                        width={100}
                                        height={100}
                                        className="thumb js-thumb"
                                    />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                    <div className="product-cover">
                        <Image
                            src={product.images[0]?.src}
                            alt={product.images[0]?.alt || "Product Image"}
                            width={400}
                            height={400}
                        />
                        <div className="layer hidden-sm-down"></div>
                        <ul className="product-flag">
                            <li className="new"><span>New</span></li>
                        </ul>
                    </div>
                </div>
                <div className="scroll-box-arrows">
                    <i className="material-icons left">&#xE314;</i>
                    <i className="material-icons right">&#xE315;</i>
                </div>
            </section>
        </div>
    );
}

export default ImageSlider;
