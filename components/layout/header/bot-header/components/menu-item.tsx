"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchWordPressMenus, fetchWordPressMenuItems } from "@/utils/wpApi";

interface MenuItem {
    ID: number;
    title: string;
    url: string;
}

const MenuItems: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const menus = await fetchWordPressMenus();

                if (menus.length === 0) {
                    setError('Цэс олдсонгүй');
                    return;
                }
                const primaryMenu = menus.find((menu: { name: string }) => menu.name === 'Primary-menu');
                if (!primaryMenu) {
                    setError('Primary menu not found');
                    return;
                }
                const items = await fetchWordPressMenuItems(primaryMenu.term_id);
                setMenuItems(items);

            } catch (error) {
                setError('Цэс алдаа гарлаа');
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Алдаа: {error}</div>;
    }

    return (
        <div id="pt_custommenu" className="pt_custommenu">
            {menuItems.map((item) => (
                <div key={item.ID} id="pt_menu_home" className="pt_menu act">
                    <div className="parentMenu">
                        <Link href={item.url}>{item.title}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItems;
