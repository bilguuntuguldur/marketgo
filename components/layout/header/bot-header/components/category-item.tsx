// components/CategoryItem.tsx
"use client";

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Category } from "@/types";

interface CategoryItemProps {
    categories: Category[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ categories }) => {
    const renderCategoryMenu = (parentId: number) => {
        const childCategories = categories.filter(category => category.parent === parentId);

        if (childCategories.length === 0) {
            return null;
        }

        return (
            <div className="itemSubMenu leve">
                {childCategories.map((category) => (
                    <div className="itemMenu leve" key={category.id}>
                        <Link href="#" className="itemMenuName leve">
                            <span>-- {category.name}</span>
                        </Link>
                        {renderCategoryMenu(category.id)}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id="ver_pt_menu" className="pt_menu">
            {categories.filter(category => category.parent === 0).map((category) => (
                <div className="parentMenu" key={category.id}>
                    <Link href="#" className="relative">
                        <span>{category.name}</span>
                    </Link>
                    <Image 
                        src="/images/icons/right.png"
                        alt="icons"
                        width={16}
                        height={16}
                        className="absolute right-4 top-3 cursor-pointer"
                    />
                    <div className="wrap-popup">
                        <div id={`ver_popup${category.id}`} className="popup">
                            <div className="box-popup">
                                <div className="block1">
                                    <div className="column first col1" style={{ float: "left" }}>
                                        <div className="itemMenu level">
                                            <Link href="#" className="itemMenuName leve">
                                                <span>{category.name}</span>
                                            </Link>
                                            {renderCategoryMenu(category.id)}
                                        </div>
                                    </div>
                                    <div className="clearBoth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryItem;
