"use client";

import React, { useState, useEffect } from "react";
import { Category } from "@/types";
import { fetchWooCommerceCategories} from "@/utils/wooApi";
// import { useRouter } from "next/router";

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("0");

    // const router = useRouter();

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await fetchWooCommerceCategories();
            setCategories(fetchedCategories);
        };
        fetchCategories();
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery) {
            // router.push(`/search?query=${searchQuery}&category=${selectedCategory}`);
        }
    };

    const renderCategoryOptions = (categories: Category[], parentId: number = 0, level: number = 0) => {
        return categories
            .filter(category => category.parent === parentId)
            .map(category => (
                <React.Fragment key={category.id}>
                    <option value={category.id}>
                        {"-".repeat(level * 2)} {category.name}
                    </option>
                    {renderCategoryOptions(categories, category.id, level + 1)}
                </React.Fragment>
            ));
    };

    return (
        <form id="searchbox" className="form-inline form_search" onSubmit={handleSearchSubmit}>
            <label htmlFor="pos_query_top"></label>
            <input type="hidden" name="controller" value="search" />
            <div className="pos_search form-group">
                <select
                    className="bootstrap-select"
                    name="poscats"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="0">Бүх ангилал</option>
                    {renderCategoryOptions(categories)}
                </select>
            </div>
            <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Та юу хайж байна вэ?"
                id="pos_query_top"
                className="search_query form-control ac_input"
            />
            <button type="submit" className="btn btn-default search_submit">
                <span>Хайх</span>
            </button>
        </form>
    );
};

export default SearchForm;