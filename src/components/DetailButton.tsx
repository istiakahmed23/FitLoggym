'use client'
import { useProductContext } from '@/context/ProductContext';
import { IWorkout } from '@/types/gym.type';
import { Bookmark, CalendarPlus } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const DetailButton = ({product}:{product:IWorkout}) => {
    const {planList, setPlanList, savedList, setSavedList} = useProductContext();
    const isFull = planList.length >= 5;
    const alreadyFilled = planList.some(item=>item.id === product.id);
    const alreadyInSaved = savedList.some(item=>item.id === product.id);

    const handleAddToPlan=()=>{
        if(isFull){
            toast.error("Plan stack is full");
            return;
        }
        if(alreadyFilled){
            toast.error("Plan is already added");
            return;
        }

        setPlanList(prev=>[...prev, product]);
        toast.success(`${product.name} is in plan`)

    };

    const handleAddToSaved=()=>{
        if(alreadyInSaved){
            toast.error("Already in saved")
        }
        setSavedList(prev=>[...prev,product])
        toast.success(`${product.name} is in saved`)
    }
    return (
        <div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <button
                   disabled={alreadyFilled}
                    onClick={handleAddToPlan}
                    type="button"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-4 py-3 text-xs font-bold text-black transition-colors hover:bg-[#D5FF38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F12] disabled:cursor-not-allowed disabled:pointer-events-auto disabled:opacity-50 disabled:blur-[1px]"
                >
                    <CalendarPlus size={14} />
                    Add to today's plan
                </button>

                <button
                   disabled={alreadyInSaved}
                    onClick={handleAddToSaved}
                    type="button"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#30343D] bg-transparent px-4 py-3 text-xs font-medium text-[#D1D5DB] transition-colors hover:border-[#C2F800] hover:text-[#C2F800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] disabled:cursor-not-allowed disabled:pointer-events-auto disabled:opacity-50 disabled:blur-[1px]"
                >
                    <Bookmark size={14} />
                    Save for later
                </button>
            </div>


        </div>
    );
};

export default DetailButton;