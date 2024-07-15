"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
// import Button from "@/components/ui/button";

const WishListAction = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.push("/wishlist")} className="wishtlist_top">
            <Image
                src="/images/icons/favorite.png"
                alt="Love"
                width={38}
                height={38}
                className="relative inline mt-1 cursor-pointer"
            />
            <div className="groud-wlist">
                <span className="cart-wishlist-number">0</span>
                <span className="text">Wishlist</span>
            </div>
        </button>
    );
};

export default WishListAction;