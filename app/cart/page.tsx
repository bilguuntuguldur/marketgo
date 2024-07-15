"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import NextBreadcrumb from "@/components/breadcrumbs/page";

const CartPage = () => {

    const [ismounted, setismounted] = useState(false);
    const cart = useCart();
    useEffect(() => {
        setismounted(true);
    }, [])

    if (!ismounted) {
        return <div className="conten-box">Түр хүлээнэ үү...</div>
    }

    return (
        <div>
            <div className="breadcrumb">
                <div className="conten-box">
                    <div className="breadcrumb_container">
                        <nav className="breadcrumb-inner">
                            <NextBreadcrumb
                                homeElement={'Home'}
                                separator={<span> / </span>}
                                activeClasses='main_color'
                                containerClasses='flex py-5 px-32'
                                listClasses='hover:underline mx-2 font-bold'
                                capitalizeLinks
                            />
                        </nav>
                    </div>
                </div>
            </div>
            <div className="conten-box">
                <div className="row">
                    <div id="content-wrapper" className="col-xs-12">
                        <section id="main">
                            <div className="cart-grid row">
                                <div className="cart-grid-body col-xs-12 col-lg-8">
                                    <div className="card cart-container">
                                        <div className="card-block">
                                            <h1 className="h1">Сагс</h1>
                                        </div>
                                        <hr className="separator" />
                                        <div className="cart-overview js-cart">
                                            <ul className="cart-items">
                                                {cart.items.length === 0 && <p className="text-neutral-500">Сагс хоосон</p>}
                                                {cart.items.map((item) => (
                                                    <CartItem key={item.id} product={item} />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link className="label" href="https://bekishop.com/shop">
                                        Дэлгүүр руу буцах
                                    </Link>
                                </div>  
                                <Summary />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
