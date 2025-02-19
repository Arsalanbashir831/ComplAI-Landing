'use client';

import { useState } from 'react';

interface HoverPopupProps {
    children: React.ReactNode;
    message: string;
}

export default function HoverPopup({ children, message }: HoverPopupProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <div className=" bg-blue-700 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max bg-black text-white text-sm px-3 py-2 rounded-md shadow-md z-50">
                    {message}
                </div>
            )}
        </div>
    );
}
