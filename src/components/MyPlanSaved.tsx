'use client'
import { useProductContext } from '@/context/ProductContext';
import React, { useState } from 'react';
import PlanCard from './PlanCard';
import { IWorkout } from '@/types/gym.type';
import Link from 'next/link';

const MyPlanSaved = () => {
    const { planList, setPlanList, savedList, setSavedList } = useProductContext();
    const [activeTab, setActiveTab] = useState<"Today's plan" | "Saved">("Today's plan");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    // const [orderId, setOrderId] = useState<number[]>([]);

    const [completedIds, setCompletedIds] = useState<Set<IWorkout["id"]>>(
        new Set()
    );

    // const currentList = activeTab === "Today's plan" ? planList : savedList; 

    const isSavedTab = activeTab === "Saved";
    const currentList = isSavedTab ? savedList : planList;


    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "duration") return a.duration - b.duration;
        if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "rating") return a.rating - b.rating;

        return 0;
    });

    // console.log(sortBy);

    const totalPlan = currentList.length;
    const totalTime = currentList.reduce((sum, item) => sum + item.duration, 0);
    const totalCal = currentList.reduce((sum, item) => sum + item.caloriesBurned, 0);

    // handle function

    const handleRemove = (id: IWorkout["id"]) => {
        if (isSavedTab) {
            setSavedList((previous) =>
                previous.filter((item) => item.id !== id)
            );
        } else {
            setPlanList((previous) =>
                previous.filter((item) => item.id !== id)
            );

            setCompletedIds((previous) => {
                const updated = new Set(previous);
                updated.delete(id);
                return updated;
            });
        }
    };


    const handleMarkDone = (id: IWorkout["id"]) => {
        setCompletedIds((previous) => {
            const updated = new Set(previous);
            updated.add(id);
            return updated;
        });
    };



    // const productShow = () => {
    //     if (sortedList.length === 0) {
    //         return (
    //             <>

    //             </>
    //         )
    //     }

    //     return (
    //         <>
    //             {sortedList.map(item => (

    //                 <PlanCard key={item.id} />
    //             )
    //             )}
    //         </>
    //     )

    // }



    return (
        <div>
            <div className='container mx-auto p-4 flex flex-col'>
                <div className='py-4'>
                    <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-[26px]">
                        My Plan
                    </h1>
                    <p className="mt-1 text-xs text-[#858c98] sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="stats shadow flex justify-start">
                    <div className="stat place-items-start">
                        <div className="stat-title">Exercises</div>
                        <div className="stat-value text-[#C2F10D]">{totalPlan}</div>

                    </div>

                    <div className="stat place-items-start">
                        <div className="stat-title">Minutes</div>
                        <div className="stat-value">{totalTime}</div>

                    </div>

                    <div className="stat place-items-start">
                        <div className="stat-title">Calories</div>
                        <div className="stat-value">{totalCal}</div>

                    </div>
                </div>


                {/* name of each tab group should be unique
                <div className="tabs tabs-border my-5">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        className="tab"
                        aria-label="Today's plan"
                        checked={activeTab === "Today's plan"}
                        onChange={() => setActiveTab("Today's plan")}
                    />
                    <div className="tab-content border-base-300 bg-base-100 p-10">{productShow()}</div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        className="tab"
                        aria-label="Saved"
                        onChange={() => setActiveTab("Saved")}
                    />
                    <div className="tab-content border-base-300 bg-base-100 p-10">{productShow()}</div>


                    <div className='flex items-center ms-auto gap-2'>

                        <div>
                            <p className='text-[#8A92A0] text-[14px]'>SortBy</p>

                        </div>

                        <select
                            onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                            defaultValue="Sort"
                            className="select"
                        >
                            <option disabled={true}>Sort</option>
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>

                        </select>

                    </div>


                </div> */}

                {/* Tabs and sorting */}
                <div className="my-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#252933] bg-[#14161C] p-2">
                    <div className="flex items-center gap-1">
                        {(["Today's plan", "Saved"] as const).map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-md px-3 py-2 text-xs transition ${activeTab === tab
                                    ? "bg-[#252933] font-semibold text-white"
                                    : "text-[#858C98] hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>


                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="sort-workouts"
                            className="text-xs text-[#858C98]"
                        >
                            Sort By
                        </label>

                        <select
                            id="sort-workouts"
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(
                                    event.target.value as
                                    | "duration"
                                    | "calories"
                                    | "rating"
                                )
                            }
                            className="rounded-md border border-[#30343D] bg-[#14161C] px-2 py-2 text-xs text-white outline-none focus:border-[#C2F800]"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>



                {/* Workout cards */}
                <div className="space-y-3">
                    {sortedList.length > 0 ? (
                        sortedList.map((item) => (
                            <PlanCard
                                key={item.id}
                                product={item}
                                isSaved={isSavedTab}
                                isCompleted={completedIds.has(item.id)}
                                onRemove={handleRemove}
                                onMarkDone={handleMarkDone}
                            />
                        ))
                    ) : (
                        <div className="rounded-xl border border-dashed border-[#30343D] px-4 py-12 text-center">
                            <p className="text-[20px] font-bold text-white">
                                {isSavedTab
                                    ? "NOTHING HERE YET"
                                    : "NOTHING HERE YET"}
                            </p>

                            <p className="mt-2 text-xs text-[#858C98]">
                                {isSavedTab
                                    ? "Browse the library and add a lift to get today moving."
                                    : "Browse the library and add a lift to get today moving."}
                            </p>

                            <Link
                                href="/"
                                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-[#c4ff00] px-5 py-2 text-[11px] font-bold text-[#111408] shadow-[0_0_20px_rgba(196,255,0,0.08)] transition duration-200 hover:bg-[#d5ff4d] hover:shadow-[0_0_24px_rgba(196,255,0,0.16)] active:scale-95"
                            >
                                Go to workouts
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M5 12h14m-6-6 6 6-6 6" />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>


            </div>

        </div>

    );
};

export default MyPlanSaved;