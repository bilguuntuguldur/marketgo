"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface DetailsProps {
    data: Product
}


const Details = ({ data }: DetailsProps) => {

    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();
        cart.addItem(data);
    };

    return (
        <div className="col-md-7">
            <h1 className="h1 name_details">{data.name}</h1>
            <p className="Referance"> Ангилал: {data.categories[0].name} / {data.categories[1].name}</p>
            <div id="product_comments_block_extra" className="no-print">
                <ul className="comments_advices">
                    <li className="relative">
                        <Image src="/images/icons/pen.png" alt="comment" width={15} height={15} className="cursor-pointer absolute top-1 left-0" />
                        <Link href="#" className="open-comment-form">
                            Сэтгэгдэл нэмэх
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="product-prices h5" itemProp="offers">
                <div className="current-price">
                    <span className="price">{data.price}</span>
                </div>
            </div>
            <div className="product-information">
                <div id="" className="product-desc" itemProp="description">
                    <div dangerouslySetInnerHTML={{ __html: data.description }} className="text-l main_gray" />
                </div>
            </div>
            <div className="product-actions">
                <div className="product-variants">
                    <div className="clearfix product-variants-item">
                    <span className="control-label">Хэмжээ</span>
                            <select className="form-control form-control-select" id="group_1" data-product-attribute="1" name="group[1]">
                                    <option value="1" title="S">S</option>
                                    <option value="2" title="M">M</option>
                                    <option value="3" title="L">L</option>
                                    <option value="4" title="XL">XL</option>
                                </select>
                        </div>
                </div>
                <div className="product-add-to-cart">
                    <span className="control-label">Тоо ширхэг</span>
                    <div className="product-quantity clearfix">
                        <div className="qty">
                            <div className="input-group bootstrap-touchspin">
                                <span className="input-group-addon bootstrap-touchspin-prefix"  style={{ display: 'none' }}></span>
                                <input type="text" name="qty" id="quantity_wanted" value="1" className="input-group form-control" min="1" aria-label="Quantity" />
                                <span className="input-group-addon bootstrap-touchspin-postfix"  style={{ display: 'none' }}></span>
                                <span className="input-group-btn-vertical">
                                    <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button">
                                        <Image src="/images/icons/upp.png" alt="icons-checkout" width={20} height={20} className="touchspin-up" />
                                    </button>
                                    <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button">
                                        <Image src="/images/icons/downn.png" alt="icons-checkout" width={20} height={20} className="touchspin-up" />
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="add">
                            <button onClick={onAddToCart} className="btn btn-primary add-to-cart flex gap-4">
                                <span className="text">Сагсанд хийх</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-additional-info mt-8">
                    <p className="panel-product-line panel-product-actions">
                        <a id="wishlist_button" href="#"  rel="nofollow" title="Add to my wishlist">
                            <Image src="/images/icons/favorite.png" alt="wishlist" width={25} height={25} className="wishlist inline mr-4" />
                            Хүслийн жагсаалтанд нэмэх
                        </a>
                    </p>
                    <div className="social-sharing">
                    <span className="mr-6">Share: </span>
                    <ul>
                        <li className="mr-4">
                            <Image
                                src="/images/icons/facebook.png"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </li>
                        <li className="mr-4">
                            <Image
                                src="/images/icons/instagram.png"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </li>
                        <li className="mr-4">
                            <Image
                                src="/images/icons/twitter.png"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div id="block-reassurance">
                <ul className="text-left">
                    <li>
                        <div className="flex gap-4 mb-2 p-2">
                            <Image
                                src="/images/icons/cart/shield.png"
                                alt="icons-checkout"
                                width={35}
                                height={30}
                                className=""
                            />
                            <span className="h6">Нууцлал хамгаалалт, үйлчилгээний нөхцөл</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-4 mb-2 p-2">
                            <Image
                                src="/images/icons/cart/shipping.png"
                                alt="icons-checkout"
                                width={35}
                                height={30}
                                className=""
                            />
                            <span className="h6">Хүргэлтийн нөхцөлтэй танилцах</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-4 mb-2 p-2">
                            <Image
                                src="/images/icons/cart/return.png"
                                alt="icons-checkout"
                                width={35}
                                height={30}
                                className=""
                            />
                            <span className="h6">Буцаалт, төлбөрийн үйлчилгээний нөхцөл</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Details