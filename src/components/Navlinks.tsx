'use client'
export const instant = false;
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

const Navlinks = ({href,children}:{href:string, children:ReactNode}) => {
    const pathName = usePathname();
    const isActive = href === '/'? pathName === '/' : pathName.startsWith(href); 
    return (
        <Link href={href} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ${
        isActive
          ? "bg-[#1A2312] text-[#C2F800]"
          : "bg-transparent text-[#9CA3AF] hover:text-white"
      }`}>
            {children}
        </Link>
    );
};

export default Navlinks;