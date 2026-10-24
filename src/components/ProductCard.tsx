import { IWorkout } from '@/types/gym.type';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }: { product: IWorkout }) => {
    return (
        <div>
            <Link href={'/'} className='group block w-full overflow-hidden rounded-xl border border-[#252830] bg-[#15161B] text-white transition-all duration-300 hover:border-[#C2F800]/50 hover:shadow-lg hover:shadow-[#C2F800]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800]'>
            {/* Workout Image */}
                <div className="relative aspect-[2/1] w-full overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">

                    {/* Muscle Group Badges */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                        {product.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[9px] font-extrabold uppercase leading-none tracking-wide text-black"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="truncate text-base font-extrabold uppercase leading-6 tracking-wide sm:text-lg">
                        {product.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-1 truncate text-xs text-[#9297A3]">
                        {product.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-3 border-t border-[#252830]" />

                    {/* Workout Statistics */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9297A3]">

                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                            <Clock3 size={13} strokeWidth={1.8} />
                            <span>{product.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1.5">
                            <Flame size={13} fill="currentColor" strokeWidth={1.5} />
                            <span>{product.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <Star size={13} strokeWidth={1.8} />
                            <span>{product.rating.toFixed(1)}</span>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
        
            

        
    );
};

export default ProductCard;