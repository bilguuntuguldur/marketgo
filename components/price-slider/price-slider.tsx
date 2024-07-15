"use client";   

import { useState } from "react";
import styles from "./price-slider.module.css";

const PriceSlider = () => {
    const [price, setPrice] = useState<number>(50);

    return (
        <div className={styles.priceSlider}>
            <input
                type="range"
                min="0"
                max="100"
                value={price}
                className={styles.rangeInput}
                onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <div className={styles.sliderValues}>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default PriceSlider;
