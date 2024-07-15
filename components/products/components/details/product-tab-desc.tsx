
import Link from "next/link";
import { Product } from "@/types";

interface DescriptionProps {
    data: Product
}

const ProductTabDesc = ( { data }: DescriptionProps) => {

    return (
        <div className="col-xs-12">
            <div className="tabs">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link href="#description" className="nav-link" data-toggle="tab">Дэлгэрэнгүй</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#product-details" className="nav-link" data-toggle="tab">Нэмэлт мэдээлэл</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#idTab5" className="nav-link" data-toggle="tab">Сэтгэгдэл үлдээх</Link>
                    </li>
                </ul>
                <div id="tab-content" className="tab-content">
                    <div className="tab-pane fade in active" id="description">
                        <div className="product-description">
                            <div dangerouslySetInnerHTML={{ __html: data.short_description }} className="text-l main_gray"/>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="product-details">
                        <div className="product-manufacturer">

                        </div>
                        <div className="product-quantities">
                            <label className="label">Үлдэгдэл:</label>
                            <span className="">
                                {data.stock_quantity}
                            </span>
                        </div>
                        <div className="product-out-of-stock">
                        </div>
                    </div>
                    <div className="tab-pane fade" id="idTab5">
                        <div id="product_comments_block_tab">
                            <p className="align-center">
                                <Link href="#" id="new_comment_tab_btn" className="btn btn-secondry" data-toggle="modal" data-target="#mymodal">
                                    Сэтгэгдэл нэмэх
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductTabDesc;