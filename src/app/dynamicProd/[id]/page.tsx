import { getSingleProd } from '@/dataFetch/api';
import { Bookmark, CalendarPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DetailsPageProps {
    params: Promise<{ id: string }>;
}

const ProductDetails = async ({ params, }: DetailsPageProps) => {
    const { id } = await params;
    const data = await getSingleProd(id);
    const product = data;


    const details = [
        { label: "Equipment", value: product.equipment },
        { label: "Difficulty", value: product.difficulty },
        { label: "Sets", value: String(product.sets) },
        { label: "Reps", value: product.reps },
        { label: "Duration", value: `${product.duration} min` },
        { label: "Calories", value: `${product.caloriesBurned} kcal` },
        { label: "Rating", value: product.rating.toFixed(1) },
    ];

    return (
        <>
            <main className="min-h-screen bg-[#0E0F12] px-3 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
                <div className="container mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">

                    {/* Workout Image */}
                    <div className="relative h-[350px] w-full overflow-hidden rounded-xl border border-[#272A32] bg-[#15161B] sm:h-[380px] lg:h-[520px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 355px"
                            className="object-cover"
                        />
                    </div>

                    {/* Workout Details */}
                    <div className="flex min-w-0 flex-col">

                        {/* Title */}
                        <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-5 text-[#969BA7]">
                            {product.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {product.muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-semibold text-black"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>

                        {/* Workout Information */}
                        <div className="mt-4 overflow-hidden rounded-xl border border-[#252830] bg-[#151820]">
                            {details.map((detail, index) => (
                                <div
                                    key={detail.label}
                                    className={`flex min-h-[30px] items-center justify-between gap-4 px-4 py-2.5 text-xs ${index !== details.length - 1
                                        ? "border-b border-[#252830]"
                                        : ""
                                        }`}
                                >
                                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                                        {detail.label}
                                    </span>

                                    <span className="text-right font-medium text-[#E5E7EB]">
                                        {detail.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Instructions */}
                        <section className="mt-5">
                            <h2 className="text-sm font-extrabold uppercase tracking-wide">
                                Instructions
                            </h2>

                            <ol className="mt-3 list-inside list-decimal space-y-2.5 text-xs leading-5 text-[#C0C3CC]">
                                {product.instructions.map((instruction, index) => (
                                    <li key={`${product.id}-instruction-${index}`}>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Workout Actions */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                            <button
                                type="button"
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-4 py-3 text-xs font-bold text-black transition-colors hover:bg-[#D5FF38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F12]"
                            >
                                <CalendarPlus size={14} />
                                Add to today's plan
                            </button>

                            <button
                                type="button"
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#30343D] bg-transparent px-4 py-3 text-xs font-medium text-[#D1D5DB] transition-colors hover:border-[#C2F800] hover:text-[#C2F800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800]"
                            >
                                <Bookmark size={14} />
                                Save for later
                            </button>
                        </div>

                        {/* Back Link */}
                        <Link
                            href="/"
                            className="mt-5 w-fit text-xs text-[#9297A3] transition-colors hover:text-[#C2F800]"
                        >
                            ← Back to workouts
                        </Link>

                    </div>
                </div>
            </main>

        </>
    );
};

export default ProductDetails;