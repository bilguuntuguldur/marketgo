"use client";

import Link from "next/link";
import Image from "next/image";
import { Product,} from "@/types";
import IconButton from "@/components/ui/icon-button";
import { HeartIcon, ExpandIcon } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { MouseEventHandler } from "react";

interface ProductCardProps {
  product: Product;
  isAboveTheFold?: boolean;
}

const CatProductCard: React.FC<ProductCardProps> = ({ product, isAboveTheFold = false }) => {
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
    <div className="item-product">
      <Link href={`/products/${product.slug}`}>
        <div className="product-miniature js-product-miniature">
          <div className="img_block">
            <Image
              src={product.images[0]?.src}
              alt={product.images[0]?.alt || "Product Image"}
              className="thumbnail product-thumbnail"
              width={200}
              height={250}
              priority={isAboveTheFold}
            />
            <ul className="product-flag">
              {isSaleCategory && <li className="discount-percentage">{`-${discountPercentage.toFixed(0)}%`}</li>}
              {isNewCategory && <li className="new">Шинэ</li>}
            </ul>
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
            </ul>
          </div>
          <div className="product_desc">
            <div className="manufacturer"><Link href="#">{product.categories[1]?.name}</Link></div>
            <h1 itemProp="name" className="product_name">{product.name}</h1>

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
            <div className="hook-reviews"></div>
            <div className="cart">
              <div className="product-add-to-cart">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="button add-to-cart btn-default"
                >
                  <span className="text">Сагсанд хийх</span>
                </button>
              </div>
            </div>

                  <div className="product-desc" itemProp="description">
                    <p>Simply description</p>
                  </div>
              </div>
            </div>
          </Link>
        </div>
        );
};

        export default CatProductCard;
