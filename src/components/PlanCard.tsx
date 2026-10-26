import { IWorkout } from '@/types/gym.type';
import { CalendarCheck, Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PlanCardProps {
    product: IWorkout;
    isSaved: boolean;
    isCompleted?: boolean;
    onRemove: (id: IWorkout["id"]) => void;
    onMarkDone?: (id: IWorkout["id"]) => void;
}

const PlanCard = ({
    product,
    isSaved,
    isCompleted = false,
    onRemove,
    onMarkDone,
}: PlanCardProps) => {
    return (
        <div>

            <article className="flex flex-col gap-4 rounded-xl border border-[#252933] bg-[#14161C] p-3 transition-colors hover:border-[#383D48] sm:flex-row sm:items-center sm:gap-3 sm:p-3">
                {/* Workout image */}
                <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#20232B] sm:h-[60px] sm:w-[108px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 108px"
                        className="object-cover"
                    />
                </div>

                {/* Workout information */}
                <div className="min-w-0 flex-1">
                    <h3
                        className={`truncate text-xs font-extrabold uppercase tracking-wide ${isCompleted ? "text-[#858C98]" : "text-white"
                            }`}
                    >
                        {product.name}
                    </h3>

                    <p className="mt-1 truncate text-[10px] text-[#858C98]">
                        {product.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#C1C5CE]">
                        <span className="inline-flex items-center gap-1">
                            <Clock size={12} className="text-[#C2F800]" />
                            {product.duration} min
                        </span>

                        <span className="inline-flex items-center gap-1">
                            <Flame size={12} className="fill-[#C2F800] text-[#C2F800]" />
                            {product.caloriesBurned} kcal
                        </span>

                        <span className="inline-flex items-center gap-1">
                            <Star size={12} className="text-[#C2F800]" />
                            {product.rating}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:ml-auto sm:justify-end">
                    <Link
                        href={`/workouts/${product.id}`}
                        className="inline-flex min-h-8 items-center justify-center rounded-full border border-[#343945] px-3 py-2 text-[10px] text-[#E0E2E7] transition hover:border-[#C2F800] hover:text-[#C2F800]"
                    >
                        View Details
                    </Link>

                    {!isSaved && (
                        <button
                            type="button"
                            onClick={() => onMarkDone?.(product.id)}
                            disabled={isCompleted}
                            className="inline-flex min-h-8 items-center justify-center gap-1 rounded-full bg-[#C2F800] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#D5FF38] disabled:cursor-default disabled:opacity-50"
                        >
                            <CalendarCheck size={12} />
                            {isCompleted ? "Completed" : "Mark as Done"}
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#858C98] transition hover:bg-[#292D36] hover:text-white"
                    >
                        <X size={15} />
                    </button>
                </div>
            </article>



        </div>
    );
};

export default PlanCard;