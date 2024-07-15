"use client";

import Link from "next/link";
import Image from "next/image";

const Summary = () => {
    return (
        <div className="cart-grid-right col-xs-12 col-lg-4">
            <div className="card cart-summary">
                <div className="cart-detailed-totals">
                    <div className="card-block">
                        <div className="card-summary-line" id="cart-subtotal-products">
                            <span className="label">Нэгж үнэ</span>
                            <span className="value">₮</span>
                        </div>
                        <div className="card-summary-line" id="cart-subtotal-shipping">
                            <span className="label">Хүргэлт</span>
                            <span className="value">6000₮</span>
                            <div><small className="value"></small></div>
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="card-block">
                        <div className="card-summary-line cart-total">
                            <span className="value">Нийт дүн (шимтгэл орсон дүн.)</span>
                            <span className="value">₮</span>
                        </div>
                        <div className="card-summary-line">
                            <span className="label">Нөатын дүн</span>
                            <span className="value">₮</span>
                        </div>
                    </div>
                    <hr className="separator"/>
                </div>
                <div className="checkout cart-detailed-actions card-block">
                    <div className="text-sm-center">
                        <Link href="/cart/checkout" className="btn btn-success btn-lg btn-block">Худалдан авах</Link>
                    </div>
                </div>
            </div>
            <div className="" id="block-reassurance">
                <ul className="text-left">
                    <li>
                        <div className="flex gap-4 mb-2 p-2">
                            <Image 
                                src="/images/icons/cart/shield.png"
                                alt="icons-checkout"
                                width={25}
                                height={25}
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
                                width={25}
                                height={25}
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
                                width={25}
                                height={25}
                                className=""
                            />
                            <span className="h6">Буцаалт, төлбөрийн үйлчилгээний нөхцөл</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Summary;