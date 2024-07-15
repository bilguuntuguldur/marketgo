"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";


const CartAction = () => {

    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {
        setisMounted(true);
    }, []);

    const router = useRouter();

    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <Button onClick={() => router.push("/cart")} className="minii-cart">
            <Image
                src="/images/icons/trolley.png"
                width={35}
                height={35}
                alt="cart"
                className="relative"
            />
            <span className="item_txt">Сагс</span>
            <span className="item_count">{cart.items.length}</span>
        </Button>
    )

}

export default CartAction;