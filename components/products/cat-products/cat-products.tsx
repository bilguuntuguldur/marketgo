
import CatProductOne from "./cat-product-one";
import CatProductTwo from "./cat-product-to";
import CatProductThree from "./cat-product-tree";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./cat-products.style.css";

const CatProducts = () => {

    return (
        <div className='conten-box'>
            <div className="tab-category-container-slider">

                <div className="tab-category">
                    <div className="pos_tab">
                        <div className="pos_title">
                            <h2>Noroo
                                <span className="t1"> Бүтээгдэхүүнүүд</span>
                            </h2>
                            <div className="box-tab">
                                <ul className="tab_cates">
                                    <li data-title="tabtitle_22" rel="tab_22" className="active">
                                        <span>Архитектур</span>
                                    </li>
                                    <li data-title="tabtitle_23" rel="tab_23">
                                        <span>Автомашин</span>
                                    </li>
                                    <li data-title="tabtitle_37" rel="tab_37">
                                        <span>Гадаргуу</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row tab-content">
                    <div className='tab1_container'>
                        <CatProductOne post_per_product={35} categoryId={63} />
                        <CatProductTwo  post_per_product={35} categoryId={62}/>
                        <CatProductThree post_per_product={35} categoryId={64}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CatProducts;