import Image from "next/image";
import "./pros.style.css";

const ProsBox = () => {
    return (
        <div className="w-full my-16">
            <div className="conten-box">
                <div className="pos-corporate-about">
                    <div className="col">
                        <div className="block-wrapper wrapper1">
                            <div className="text-des">
                                <p>Худан хүргэлт</p>
                                <span>Хотын аль ч бүсэд 180/мин.</span></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block-wrapper wrapper2">
                            <div className="text-des">
                                <p>24/7 Тусламж</p>
                                <span>Харилцагчийн тусламж 24/7.</span></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block-wrapper wrapper3">
                            <div className="text-des">
                                <p>100% Сэтгэл ханамж</p>
                                <span>30 хоногт мөнгөө буцаах.</span></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block-wrapper wrapper4">
                            <div className="text-des">
                                <p>Бараагаа буцаах</p>
                                <span>3 хоногт бараагаа буцаах.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block-wrapper wrapper5">
                            <div className="text-des">
                                <p>Аюулгүй байдал</p>
                                <span>Системийн аюулгүй байдал ок.</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProsBox;