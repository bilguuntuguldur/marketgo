"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

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
        <li className="cart-item">
            <div className="product-line-grid">
                <div className="product-line-grid-left col-md-3 col-xs-4">
                    <span className="product-image media-middle">
                        <Image
                            src={product.images[0]?.src}
                            alt={product.images[0]?.alt || "Product Image"}
                            width={100}
                            height={100}
                        />
                    </span>
                </div>
                <div className="product-line-grid-body col-md-4 col-xs-8">
                    <div className="product-line-info">
                        <Link href={`/products/${product.id}`} className="label">{product.name}</Link>
                    </div>
                    <div className="product-line-info product-price h5 has-discount">
                        <div className="product_discount">
                            <span className="regular">{product.price}₮</span>
                            <span className="discount discount-percentage">
                                -9%
                            </span>
                        </div>
                    </div>
                    <div className="product-line-info">
                        <span className="label">Хэмжээ</span>
                        <span className="value">40*60cm</span>
                    </div>
                </div>
                <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                    <div className="row">
                        <div className="col-xs-4 hidden-md-up"></div>
                        <div className="col-md-10 col-xs-6">
                            <div className="row">
                                <div className="col-md-6 col-xs-6 qty">
                                    <input
                                        className="js-cart-line-product-quantity"
                                        type="text"
                                        defaultValue={1}
                                        readOnly
                                        name="product-quantity-spin"
                                        min={1}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-2 price">
                                    <span className="product-price">
                                        <strong>
                                            {product.price}₮
                                        </strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-2 text-xs-right">
                            <div className="cart-line-product-actions">
                                <IconButton
                                    onClick={onRemove}
                                    icon={<X size={20} className="text-gray-500" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </li>
    )
}

export default CartItem;


