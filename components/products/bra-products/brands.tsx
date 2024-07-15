"use client";

import { useEffect } from "react";
import $ from 'jquery';
import Image from "next/image";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import BrandOneProduct from "./brand1";
import BrandTwoProduct from "./brand2";
import "./brands.style.css";


const BrandsSlider = () => {
    useEffect(() => {
        $(document).ready(function() {
            $(".tab_manus").owlCarousel({
                autoplay: false,
                smartSpeed: 1000,
                nav: false,
                dots: false,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                    1200: { items: 5 },
                    1600: { items: 6 },
                    1920: { items: 7 }
                }
            });

            $(".manu_facturer_tab").hide();
            $(".manu_facturer_tab:first").show();

            $("ul.tab_manus li").on("click", function() {
                $("ul.tab_manus li").removeClass("active");
                $(this).addClass("active");
                $(".manu_facturer_tab").hide();
                var activeTab = $(this).attr("rel");
                $("#" + activeTab).fadeIn();
            });
        });
    }, []);

    return (
        <div className="conten-box">
            <div className="tab-manufacturers-container-slider">
                <div className='pos_title'>
                    <h2> Брэндийн
                        <span className="t1"> Бүтээгдэхүүн</span>
                    </h2>
                </div>
                <div className="thumb_manu">
                    <ul className="tab_manus owl-carousel">
                        <li data-title="tabtitle_1" rel="tab_1" className="active">
                            <div className="manu_thumb">
                            <Image src="/images/icons/brands/hidefxxx.png" alt="Studio Design" width={120} height={45} />
                            </div>
                        </li>
                        <li data-title="tabtitle_2" rel="tab_2">
                            <div className="manu_thumb">
                                <Image src="/images/icons/brands/noroo.png" alt="Studio Design" width={120} height={45} />
                            </div>
                        </li>
                        <li data-title="tabtitle_3" rel="tab_3">
                            <div className="manu_thumb">
                                <Image src="/images/icons/brands/adidas.png" alt="Studio Design" width={120} height={45}/>
                            </div>
                        </li>
                        <li data-title="tabtitle_3" rel="tab_3">
                            <div className="manu_thumb">
                                <Image src="/images/icons/brands/nike.png" alt="Studio Design" width={120} height={45}/>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="manu_content">
                    <div className="pos_content row">
                        <div className="manu_facturer">
                            <BrandOneProduct post_per_product={35} categoryId={24} />
                            <BrandTwoProduct post_per_product={35} categoryId={61} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsSlider;
