"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import './hero-slider.style.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const sliderImages1 = [
    { id: 1, src: '/images/banner/hidefxxx-banner.png', alt: 'Banner one', title: 'HideFxxx Brand', caption: 'Polish your shoes', link: '#' },
    { id: 2, src: '/images/banner/hidefxxx-banner.png', alt: 'Banner two', title: 'HideFxxx Brand', caption: 'Polish your shoes', link: '#' }
];

const sliderImages2 = [
    { id: 3, src: '/images/banner/1223.jpg', alt: 'Banner three', title: 'Gobi Cashmere', caption: 'Mongolian golden cashmere', link: '#' },
    { id: 4, src: '/images/banner/1223.jpg', alt: 'Banner four', title: 'Gobi Cashmere', caption: 'Mongolian golden cashmere', link: '#' }
];

const HeroBannerSlider = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="slider-container">
            <div className="grid">
                <div className="grid-item">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <OwlCarousel
                            className="hero-slider1 owl-carousel owl-theme"
                            loop
                            margin={10}
                            nav
                            dots={false}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 1 },
                                1000: { items: 1 }
                            }}
                            smartSpeed={1000}
                            autoplayHoverPause={true}
                        >
                            {sliderImages1.map(image => (
                                <div key={image.id} className="item">
                                    <a href={image.link} title={image.alt}>
                                        <Image src={image.src} alt={image.alt} width={680} height={410} />
                                    </a>
                                    <div className="info desc1">
                                        <p className="title1">{image.title}</p>
                                        <p className="title2">{image.caption}</p>
                                        <p className="readmore"><a href={image.link}><span>Shop now</span></a></p>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    )}
                </div>
                <div className="grid-item">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <OwlCarousel
                            className="hero-slider2 owl-carousel owl-theme"
                            loop
                            margin={10}
                            nav
                            dots={false}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 1 },
                                1000: { items: 1 }
                            }}
                            smartSpeed={1000}
                            autoplayHoverPause={true}
                        >
                            {sliderImages2.map(image => (
                                <div key={image.id} className="item">
                                    <a href={image.link} title={image.alt}>
                                        <Image src={image.src} alt={image.alt} width={380} height={410} />
                                    </a>
                                    <div className="info desc1">
                                        <p className="title1">{image.title}</p>
                                        <p className="title2">{image.caption}</p>
                                        <p className="readmore"><a href={image.link}><span>Shop now</span></a></p>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroBannerSlider;
