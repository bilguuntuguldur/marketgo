"use client";

import React from "react";
import CartItem from "./components/cart-item";
import CartTotals from "./components/cart-total";
import useCart from "@/hooks/use-cart";

const CartBody: React.FC = () => {
    const cart = useCart();

    return (
        <div className="body">
            <ul>
                {cart.items.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </ul>
            <CartTotals />
        </div>
    );
};

export default CartBody;
