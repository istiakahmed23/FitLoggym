export const instant = false; //data fetch error handling
import Allproducts from "@/components/Allproducts";
import Banner from "@/components/Banner";
import { getAllprods } from "@/dataFetch/api";
import { IWorkout } from "@/types/gym.type";


export default async function Home() {
  const data = await getAllprods();
  const products: IWorkout[] = data;
  // console.log("fetchind data: ", data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Banner /> 
      <Allproducts products={products} />
      
    </div>
  );
}
