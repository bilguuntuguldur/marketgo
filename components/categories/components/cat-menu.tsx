// components/CategoryMenu.tsx
import Link from 'next/link';
import Image from 'next/image';
import { CategoryWithSubcategories } from '@/types';

interface CategoryMenuProps {
    categories: CategoryWithSubcategories[];
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
    const renderCategoryMenu = (categories: CategoryWithSubcategories[]) => {
        return (
            <ul className="category-top-menu">
                {categories.map(category => (
                    <li key={category.id}>
                        <Link className="text-uppercase h6" href={`/category/${category.slug}`}>{category.name}</Link>
                        {category.subcategories.length > 0 && (
                            <ul className="category-sub-menu">
                                {category.subcategories.map(subcategory => (
                                    <li key={subcategory.id} data-depth="0">
                                        <Link href={`/category/${subcategory.slug}`}>{subcategory.name}</Link>
                                        {subcategory.subcategories.length > 0 && (
                                            <div>
                                                <div className="navbar-toggler collapse-icons collapsed" data-toggle="collapse" data-target={`#category-${subcategory.id}`} aria-expanded="false">
                                                    <Image src="/images/icons/plus.png" alt="arrow-down" width={10} height={10} className="add" />
                                                    <Image src="/images/icons/minus.png" alt="arrow-up" width={10} height={10} className="remove" />
                                                </div>
                                                <div className="collapse" id={`category-${subcategory.id}`} aria-expanded="false">
                                                    <ul className="category-sub-menu">
                                                        {subcategory.subcategories.map(subsubcategory => (
                                                            <li key={subsubcategory.id} data-depth="1">
                                                                <Link className="category-sub-link" href={`/category/${subsubcategory.slug}`}>{subsubcategory.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return renderCategoryMenu(categories);
};

export default CategoryMenu;
