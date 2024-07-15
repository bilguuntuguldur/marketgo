"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import $ from "jquery";

import MenuItems from "./components/menu-item";
import CategoryItem from "./components/category-item";
import { fetchWooCommerceCategories } from "@/utils/wooApi";
import { Category } from "@/types";

const CUSTOMMENU_POPUP_TOP_OFFSET = 10;
const CUSTOMMENU_POPUP_EFFECT = 1;

const HeaderBot = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await fetchWooCommerceCategories();
            setCategories(fetchedCategories);
        };
        fetchCategories();
    }, []);
    useEffect(() => {
        const url = document.URL;

        // Highlight the active link
        document.querySelectorAll("#pt_menu_link ul li a").forEach(link => {
            const anchor = link as HTMLAnchorElement;
            anchor.classList.remove("act");
            if (anchor.href === url) {
                anchor.classList.add("act");
            }
        });

        // Handle hover for .pt_menu_no_child elements
        document.querySelectorAll('.pt_menu_no_child').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add("active");
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove("active");
            });
        });

        // Handle hover for #pt_custommenu .pt_menu elements
        document.querySelectorAll('#pt_custommenu .pt_menu').forEach(element => {
            element.addEventListener('mouseenter', () => {
                if (element.id !== "pt_menu_link") {
                    element.classList.add("active");
                }

                // Show popup to calculate
                const popup = element.querySelector('.popup') as HTMLElement;
                if (popup) {
                    popup.style.display = 'inline-block';

                    // Get total padding + border + margin of the popup
                    const wrapWidthPopup = popup.offsetWidth + parseFloat(window.getComputedStyle(popup).marginLeft) + parseFloat(window.getComputedStyle(popup).marginRight);
                    const actualWidthPopup = popup.clientWidth;
                    const extraWidth = wrapWidthPopup - actualWidthPopup;

                    // Calculate new width of the popup
                    const block1 = popup.querySelector('.block1') as HTMLElement;
                    const block2 = popup.querySelector('.block2') as HTMLElement;
                    let newWidthPopup = 0;

                    if (block1 && !block2) newWidthPopup = block1.offsetWidth;
                    if (!block1 && block2) newWidthPopup = block2.offsetWidth;
                    if (block1 && block2) newWidthPopup = block1.offsetWidth;

                    const newOuterWidthPopup = newWidthPopup + extraWidth;

                    // Define top and left of the popup
                    const wrapper = document.querySelector('.pt_custommenu') as HTMLElement;
                    const wWrapper = wrapper.offsetWidth;
                    const posWrapper = wrapper.getBoundingClientRect();
                    const pos = element.getBoundingClientRect();

                    const xTop = pos.top - posWrapper.top + CUSTOMMENU_POPUP_TOP_OFFSET;
                    let xLeft = pos.left - posWrapper.left;
                    if ((xLeft + newOuterWidthPopup) > wWrapper) xLeft = wWrapper - newOuterWidthPopup;

                    popup.style.top = `${xTop}px`;
                    popup.style.left = `${xLeft}px`;

                    // Set new width of the popup
                    popup.style.width = `${newWidthPopup}px`;
                    if (block1) block1.style.width = `${newWidthPopup}px`;

                    // Return popup display to none
                    popup.style.display = 'none';

                    // Show/hide popup with effects
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).slideDown('slow');
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).fadeIn('slow');
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).show('slow');
                }
            });

            element.addEventListener('mouseleave', () => {
                element.classList.remove("active");

                // Hide popup with effects
                const popup = element.querySelector('.popup') as HTMLElement;
                if (popup) {
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).slideUp();
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).fadeOut('slow');
                    if (CUSTOMMENU_POPUP_EFFECT === 1) $(popup).stop(true, true).hide('fast');
                }
            });
        });

        // Keep popup visible on hover
        document.querySelectorAll('.popup').forEach(popup => {
            popup.addEventListener('mouseenter', () => {
                (popup as HTMLElement).style.display = 'block';
            });
            popup.addEventListener('mouseleave', () => {
                (popup as HTMLElement).style.display = 'none';
            });
        });

        // Handle click for .pt_vmegamenu_title element
        const menuElement = document.getElementById('pt_vmegamenu') as HTMLElement;
        const verMenuElement = document.getElementById('ver_pt_menu') as HTMLElement;

        const handleMenuClick = () => {
            if (menuElement) {
                if (menuElement.style.display === 'block') {
                    menuElement.style.display = 'none';
                } else {
                    menuElement.style.display = 'block';
                }
            }
        };

        const handleVerMenuClick = () => {
            if (verMenuElement) {
                verMenuElement.classList.toggle('active');

                // Toggle wrap-popup and popup visibility based on active class
                const wrapPopup = verMenuElement.querySelector('.wrap-popup') as HTMLElement;
                const popup = verMenuElement.querySelector('.popup') as HTMLElement;
                if (wrapPopup && popup) {
                    if (verMenuElement.classList.contains('active')) {
                        wrapPopup.style.opacity = '1';
                        popup.style.display = 'block';
                    } else {
                        wrapPopup.style.opacity = '0';
                        popup.style.display = 'none';
                    }
                }
            }
        };

        const titleElement = document.querySelector('.pt_vmegamenu_title') as HTMLElement;
        if (titleElement) {
            titleElement.addEventListener('click', handleMenuClick);
        }

        if (verMenuElement) {
            verMenuElement.addEventListener('click', handleVerMenuClick);
        }

        // Cleanup event listeners on unmount
        return () => {
            document.querySelectorAll('.pt_menu_no_child').forEach(element => {
                element.removeEventListener('mouseenter', () => {});
                element.removeEventListener('mouseleave', () => {});
            });

            document.querySelectorAll('#pt_custommenu .pt_menu').forEach(element => {
                element.removeEventListener('mouseenter', () => {});
                element.removeEventListener('mouseleave', () => {});
            });

            document.querySelectorAll('.popup').forEach(popup => {
                popup.removeEventListener('mouseenter', () => {});
                popup.removeEventListener('mouseleave', () => {});
            });

            if (titleElement) {
                titleElement.removeEventListener('click', handleMenuClick);
            }
            if (verMenuElement) {
                verMenuElement.removeEventListener('click', handleVerMenuClick);
            }
        };
    }, []);

    useEffect(() => {
        // Function to calculate scroll compensation
        const scrollCompensate = () => {
            const outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";

            document.body.appendChild(outer);

            const widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";

            // add innerdiv
            const inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);

            const widthWithScroll = inner.offsetWidth;
            outer.remove();

            return widthNoScroll - widthWithScroll;
        };

        const handleScroll = () => {
            const headerBottom = document.querySelector('.header-bottom') as HTMLElement | null;
            if (!headerBottom) return;

            const headerSpace = document.querySelector('.headerSpace') as HTMLElement | null;
            if (!headerSpace) return;

            const scroll = window.scrollY || window.pageYOffset;
            const headerHeight = headerBottom.offsetHeight;

            if (scroll >= headerHeight) {
                headerBottom.classList.add('scroll-menu', 'animated', 'fadeInDown');
                headerSpace.classList.remove('unvisible');
            } else {
                headerBottom.classList.remove('scroll-menu', 'animated', 'fadeInDown');
                headerSpace.classList.add('unvisible');
            }
        };

        // Initialize header space if .header-bottom exists
        const headerBottom = document.querySelector('.header-bottom') as HTMLElement | null;
        if (headerBottom) {
            const headerSpaceH = headerBottom.offsetHeight;
            const headerSpace = document.createElement('div');
            headerSpace.className = 'headerSpace unvisible';
            headerSpace.style.height = `${headerSpaceH}px`;
            headerBottom.after(headerSpace);

            // Set initial height of .headerSpace
            window.addEventListener('resize', () => {
                const headerSpace = document.querySelector('.headerSpace') as HTMLElement | null;
                if (headerSpace) {
                    const headerSpaceH = headerBottom.offsetHeight;
                    headerSpace.style.height = `${headerSpaceH}px`;
                }
            });

            // Check scroll position on load
            handleScroll();

            // Listen for scroll events
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            // Clean up event listeners on unmount
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => {});
        };
    }, []);
    return (
        <div className="header-bottom">
            <div className="conten-box">
                <div className="row">
                    <div className="col col-lg-3 col-md-12 col-xs-12">
                        <div className="megamenu">
                            <div className="navleft-container hidden-md-down">
                                <div className="pt_vegamenu">
                                    <div className="pt_vmegamenu_title">
                                        <h2 className="flex items-center justify-between">
                                            <Image src="/images/icons/menu-white.png" alt="logo" width={20} height={20} />
                                            <span className="uppercase text-white">Бүх ангилал</span>
                                            <Image src="/images/icons/arrow-down-white.png" alt="arrow-down" width={15} height={15} />
                                        </h2>
                                    </div>

                                    <div id="pt_vmegamenu" className="pt_vmegamenu pt_vegamenu_cate" style={{ display: 'none' }}>
                                        <CategoryItem categories={categories} />
                                    </div>

                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xs-12 col-lg-9 col-md-12">
                        <div className="ma-nav-mobile-container hidden-lg-up">
                            <div className="pt_custommenu_mobile">
                                <div className="navbar">
                                    <div id="navbar-inner" className="navbar-inner navbar-inactive">
                                        <a className="btn-navbar">Category</a>
                                        <ul id="pt_custommenu_itemmobile" className="tree dhtml mobilemenu nav-collapse collapse">
                                            <li>
                                                <Link href="#">Laptop &amp; Computer</Link>
                                                <ul className="dhtml">
                                                    <li>
                                                        <Link href="#">Cell Phones with Service</Link>
                                                        <ul>
                                                            <li><Link href="#">Flickr</Link></li>
                                                            <li><Link href="#">Flip Box</Link></li>
                                                            <li><Link href="#">Frame</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Security Cameras</Link>
                                                        <ul>
                                                            <li><Link href="#">Flickrq</Link></li>
                                                            <li><Link href="#">Platform Beds</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="nav-container">
                            <div className="nav-inner">
                                <MenuItems />
                            </div>
                        </div>
                        <p className="static-menu flex gap-2">
                            <Image src="/images/icons/telephone.png" alt="phone" width={20} height={20} className="img-responsive mr-2" />
                            <span>+976 8811 5479</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBot;