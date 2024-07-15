"use client";

import { useEffect, useState } from "react";
import TabProductOne from "./tab-product-one";
import TabProductTwo from "./tab-product-to";
import TabProductThree from "./tab-product-tree";
import "./tab-products.style.css";


const TabProducts = () => {
    const [activeTab, setActiveTab] = useState("tab_new_product");

    useEffect(() => {
        const $ = require("jquery");

        $(".tab_content").hide();
        $(".tab_content:first").show();

        $("ul.tabs_slider li span").click(function (this: HTMLElement) {
            $("ul.tabs_slider li").removeClass("active");
            $(this).parent().addClass("active");
            $(".tab_content").hide();
            var activeTab = $(this).parent().attr("rel");
            $("#" + activeTab)
                .fadeIn()
                .addClass("animatetab");
            setActiveTab(activeTab);
        } as any);
    }, []);

    return (
        <div className="conten-box my-10">
            <div className="product-tabs-container-slider product_block_container">
                <div className="title-product">
                    <ul className="tabs_slider">
                        <li
                            className={`new_product first_item item ${activeTab === "tab_new_product" ? "active" : ""
                                }`}
                            rel="tab_new_product"
                        >
                            <span>Шинэ</span>
                        </li>
                        <li
                            className={`besseller_product item ${activeTab === "tab_besseller_product" ? "active" : ""
                                }`}
                            rel="tab_besseller_product"
                        >
                            <span>Бестселлер</span>
                        </li>
                        <li
                            className={`feature_product last_item item ${activeTab === "tab_feature_product" ? "active" : ""
                                }`}
                            rel="tab_feature_product"
                        >
                            <span>Хядралтай</span>
                        </li>
                    </ul>
                </div>
                <div className="conten-row">
                    <div className="row pos_content">
                        {activeTab === "tab_new_product" && (
                            <div id="tab_new_product" className="tab_content animatetab">
                                <TabProductOne
                                    post_per_product={12}
                                    categoryId={25}
                                />
                            </div>
                        )}
                        {activeTab === "tab_besseller_product" && (
                            <div
                                id="tab_besseller_product"
                                className="tab_content animatetab"
                            >
                                <TabProductTwo
                                    post_per_product={12}
                                    categoryId={78}
                                />
                            </div>
                        )}
                        {activeTab === "tab_feature_product" && (
                            <div
                                id="tab_feature_product"
                                className="tab_content animatetab"
                            >
                                <TabProductThree
                                    post_per_product={12}
                                    categoryId={67}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabProducts;
