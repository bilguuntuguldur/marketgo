
import Link from "next/link";
import Image from "next/image";
import CartAction from "@/actions/cart-action";
import CartBody from "@/components/cart/cart-body";
import WishListAction from "@/actions/wishlist-action";
import SearchForm from "./components/search-form";
import "./mid-header.style.css";

const MidHeader: React.FC = () => {

    return (
        <div className="header-top">
            <div className="conten-box">
                <div className="row">
                    <div className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
                        <Link href="/">
                            <Image
                                src="/images/logo-main.png"
                                alt="MarketGo"
                                width={263}
                                height={93}
                                className="logo img-responsive"
                            />
                        </Link>
                    </div>
                    <div className="col-right col col-xs-12 col-lg-9 col-md-12">
                        <div className="seach-cart">
                            <div className="blockcart cart-preview">
                                <div className="header">
                                    <CartAction />
                                </div>
                                    <CartBody />
                            </div>
                            <div className="wishtlist_Top">
                                <WishListAction />
                            </div>
                            <div id="pos_search_top">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;
