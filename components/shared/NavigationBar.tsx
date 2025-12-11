import React from "react";
import Link from "next/link";
import {NavigationProps} from "@/types";

const NavigationBar: React.FC<NavigationProps> = (
    {
        menuItems
    }
) => {
    return (
        <nav className="w-full flex justify-center py-6 bg-primary-6 drop-shadow-lg">
            <div className="flex gap-16 text-white-1 text-large-3">
                {menuItems.map(item => (
                    <Link key={item.id} href={item.link} className="nav-item">
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavigationBar;