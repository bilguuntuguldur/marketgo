import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

interface CartItemProps {
    product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(product.id);
        toast.success("Таны сагсанд устгагдлаа");
    };

    return (
        <li>
            <div className="img_content">
                <Image
                    className="product-image img-responsive"
                    src={product.images[0]?.src}
                    alt={product.images[0]?.alt || "Product Image"}
                    width={50}
                    height={50}
                />
                <span className="product-quantity">1x</span>
            </div>
            <div className="right_block">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.regular_price}₮</span>
                <span className="remove-from-cart">
                    <X onClick={onRemove} size={20} />
                </span>
                <div className="attributes_content">
                    <span>
                        <strong>Хэмжээ</strong>: {product.dimensions?.length}x{product.dimensions?.width}x{product.dimensions?.height}
                    </span>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
