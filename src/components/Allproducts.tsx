import { IWorkout } from '@/types/gym.type';
import React from 'react';
import ProductCard from './ProductCard';

const Allproducts = ({products}: {products: IWorkout[]}) => {
    return (
        <div className='container mx-auto p-4'>
            <div>
                <div className='pb-4'>
                    <h2 className='font-bold text-[36px]'>THE LIBRARY</h2>
                    <p className='text-[#9CA3AF] text-[18px] font-normal'>Twelve lifts covering every major muscle group.</p>
                </div>
                <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {products.map(product=><ProductCard key={product.id} product={product} />)}
                </div>
            </div>
            
        </div>
    );
};

export default Allproducts;