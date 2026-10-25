export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IWorkoutProdContext{
  planList: IWorkout[];
  savedList: IWorkout[];
  setPlanList:React.Dispatch<React.SetStateAction<IWorkout[]>>;
  setSavedList:React.Dispatch<React.SetStateAction<IWorkout[]>>;
}