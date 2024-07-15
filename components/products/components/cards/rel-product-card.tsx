import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { ShoppingCart, HeartIcon, ExpandIcon } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface ProductCardProps {
    product: Product;
    isAboveTheFold?: boolean;
}

const RelatedProductCard: React.FC<ProductCardProps> = ({ product, isAboveTheFold = false }) => {

    const cart = useCart();

    const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();
        cart.addItem(product);
        toast.success("Таны сагсанд нэмэгдлээ");
    };


    // Check if the product belongs to the 'sale' or 'new' category by ID or name
    const isSaleCategory = product.categories.some(
        (category) => category.slug === 'sale' || category.name === 'Хямдралтай'
    );
    const isNewCategory = product.categories.some(
        (category) => category.slug === 'new' || category.name === 'Шинэ'
    );

    // Calculate discount percentage
    const regularPrice = parseFloat(product.regular_price);
    const salePrice = parseFloat(product.sale_price);
    const discountPercentage = ((regularPrice - salePrice) / regularPrice) * 100;

    return (
        <article className="product-miniature js-product-miniature" data-id-product={product.id}>
            <div className="img_block">
                <Link href="#" className="thumbnail product-thumbnail">
                    <Image
                        src={product.images[0]?.src}
                        alt={product.images[0]?.alt || "Product Image"}
                        className="thumbnail product-thumbnail"
                        width={200}
                        height={250}
                    />
                </Link>
                <ul className="product-flag">
                    <li className=" new"><span>New</span></li>
                </ul>
            </div>
            <ul className="add-to-links">
                <li>
                    <IconButton
                        icon={<ExpandIcon size={20} className="text-gray-600" />}
                    />
                </li>
                <li>
                    <div className="wishlist product-item-wishlist">
                        <IconButton
                            icon={<HeartIcon size={20} className="text-gray-600" />}
                        />
                    </div>
                </li>
                <li>
                    <IconButton
                        onClick={handleAddToCart}
                        icon={<ShoppingCart size={20} className="text-gray-600" />}
                    />
                </li>
            </ul>
            <div className="product_desc">
                <div className="manufacturer"><Link href="#">{product.categories[0].name}</Link></div>
                <h1 itemProp="name"><Link href="#" className="product_name">{product.name}</Link></h1>
                <div className="hook-reviews">
                    <div className="comments_note">
                        <div className="star_content clearfix">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
                    </div>
                </div>
                <div className="product-price-and-shipping">
                    {isSaleCategory ? (
                        <>
                            <span className="sr-only">Regular price</span>
                            <span className="regular-price">{product.regular_price}₮</span>
                            <span className="sr-only">Price</span>
                            <span itemProp="price" className="price price_sale">{product.sale_price}₮</span>
                        </>

                    ) : (
                        <>
                            <span className="sr-only">Price</span>
                            <span itemProp="price" className="price price_sale">{product.regular_price}₮</span>
                        </>
                    )}
                </div>
                <div className="product-desc" itemProp="description">
                    <p>Revolutionary</p>
                </div>
                <div className="variant-links">
                    <Link href="#" className="color bg-white" title="White"><span className="sr-only">White</span></Link>
                    <Link href="#" className="color bg-black" title="Black"><span className="sr-only">Black</span></Link>
                    <span className="js-count count"></span>
                </div>
            </div>
        </article>
    )
}

export default RelatedProductCard;
