"use client";

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Category } from "@/types";

interface CategoryItemProps {
    categories: Category[];
}

const SideCategoryItem: React.FC<CategoryItemProps> = ({ categories }) => {
    const renderCategoryMenu = (parentId: number) => {
        const childCategories = categories.filter(category => category.parent === parentId);

        if (childCategories.length === 0) {
            return null;
        }

        return (
            <ul className="category-sub-menu">
                {childCategories.map((category) => (
                    <li data-depth="0" key={category.id}>
                        <Link href={`/category/${category.slug}`}>{category.name}</Link>
                        <div className="navbar-toggler collapse-icons collapsed" data-toggle="collapse">
                            <Image src="/images/icons/plus.png" alt="arrow-down" width={10} height={10} className="add" />
                            <Image src="/images/icons/minus.png" alt="arrow-up" width={10} height={10} className="remove" />
                        </div>
                        <div className="collapse">
                            {renderCategoryMenu(category.id)}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className="category-top-menu">
            {categories.filter(category => category.parent === 0).map((category) => (
                <li key={category.id}>
                    <Link className="text-uppercase h6" href={`/category/${category.slug}`}>{category.name}</Link>
                    {renderCategoryMenu(category.id)}
                </li>
            ))}
        </ul>
    );
};

export default SideCategoryItem;