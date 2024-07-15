import React from "react";
import useCart from "@/hooks/use-cart";
import Link from "next/link";

const CartTotals: React.FC = () => {
    const cart = useCart();

    const subtotal = cart.items.reduce((acc, item) => acc + parseFloat(item.regular_price), 0);

    return (
        <div className="price_content">
            <div className="cart-subtotals">
                <div className="products price_inline">
                    <span className="label">Барааны үнэ</span>
                    <span className="value">{subtotal.toLocaleString("mn-MN")}₮</span>
                </div>
                <div className="shipping price_inline">
                    <span className="label">Хүргэлт</span>
                    <span className="value">0₮</span>
                </div>
                <div className="tax price_inline">
                    <span className="label">Татвар</span>
                    <span className="value">0₮</span>
                </div>
            </div>
            <div className="cart-total price_inline">
                <span className="label">Нийт</span>
                <span className="value">{subtotal.toLocaleString("mn-MN")}₮</span>
            </div>
            <div className="checkout">
                <Link className="btn btn-primary" href="#">
                    Төлөх
                </Link>
            </div>
        </div>
    );
};

export default CartTotals;
