import { useProductContext } from '@/context/ProductContext';
import Link from 'next/link';
import React from 'react';

const NavbarBtn = () => {
    const{planList, savedList} = useProductContext();
    return (
        <div>
            <Link href={'/myPlan'} className='btn rounded-full'>
                <button>Plan </button>
                <span className='text-[#CCFF00]'>{planList.length}</span>
            </Link>
            <Link href={'/myPlan'} className='btn rounded-full'>
            <button>Saved</button>
            <span>{savedList.length}</span>
            </Link>

        </div>
    );
};

export default NavbarBtn;