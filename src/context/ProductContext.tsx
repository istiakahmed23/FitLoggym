'use client'
import { IWorkout, IWorkoutProdContext } from "@/types/gym.type";
import { createContext, ReactNode, useContext, useState } from "react"


const productContext = createContext<undefined | IWorkoutProdContext>(undefined);

export function ProductProvider({children}:{children:ReactNode}){
    const [planList, setPlanList] = useState<IWorkout[]>([]);
    const [savedList, setSavedList] = useState<IWorkout[]>([]);

    const value={planList, setPlanList, savedList, setSavedList};

    return(
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )


}

// react custom hook for using context in several components, for making custom hook always use "use" keyword

export function useProductContext (){
    const context = useContext(productContext);
    if(!context){
        throw new Error("Your context is missing, please wrap it into the provider")
    }
    return context;
}