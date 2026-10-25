'use client'
import { useProductContext } from '@/context/ProductContext';
import React, {  useState } from 'react';

const MyPlan = () => {
    const {planList, setPlanList, savedList, setSavedList} = useProductContext();
    const [activeTab, setActiveTab] = useState<"Today's plan" | "Saved">("Today's plan");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const currentList = activeTab === "Today's plan" ? planList : savedList;
    const sortedList = [...currentList].sort((a,b)=>{
        if(sortBy === "duration") return a.duration-b.duration;
        if(sortBy === "calories") return a.caloriesBurned-b.caloriesBurned;
        if(sortBy === "rating") return a.rating-b.rating;

        return 0;
        });
    // console.log(sortBy);

    const productShow=()=>{
        if(sortedList.length === 0){
            return(
                <>
                
                </>
            )
        }

        return(
            <>
            {sortedList.map(item=>(
             
            <h2 key={item.id}>planCard</h2> 
            
            )
           )}
            </>
        )

    }
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
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-start">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-start">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>


                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border my-5">
                    <input
                     type="radio" 
                     name="my_tabs_2" 
                     className="tab" 
                     aria-label="Today's plan"
                     checked={activeTab ==="Today's plan"}
                     onChange={()=>setActiveTab("Today's plan")}
                      />
                    <div className="tab-content border-base-300 bg-base-100 p-10">{productShow()}</div>

                    <input 
                    type="radio" 
                    name="my_tabs_2" 
                    className="tab" 
                    aria-label="Saved" 
                    onChange={()=>setActiveTab("Saved")}
                     />
                    <div className="tab-content border-base-300 bg-base-100 p-10">{productShow()}</div>


                    <div className='flex items-center ms-auto gap-2'>
                        
                        <div>
                            <p className='text-[#8A92A0] text-[14px]'>SortBy</p>

                        </div>

                        <select 
                        onChange={(e)=>setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        defaultValue="Sort" 
                        className="select"
                        >
                            <option disabled={true}>Sort</option>
                            <option value ="duration">Duration</option>
                            <option value ="calories">Calories</option>
                            <option value ="rating">Rating</option>
                            
                        </select>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default MyPlan;