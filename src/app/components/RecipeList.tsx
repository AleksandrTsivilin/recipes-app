'use client'

import { useQuery } from "@tanstack/react-query";
import { mealInfoCollection } from "@/data";
import { ALL_RECIPES } from "@/constants/queryKeys";
import { useSession } from "next-auth/react";

function wait(delay: number) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }

const getRecipes = async () => {
    return wait(3000)
  .then(_ => {
    return mealInfoCollection;
  });
}


export const RecipeList = () => {
    const { data, isLoading } = useQuery({
        queryKey: [ALL_RECIPES],
        queryFn: () => getRecipes(),
      });
    const session = useSession();
    console.log('session in recipeList', session)
    // console.log('recipes', data)
    if (isLoading) {
      return (
        <p className="bg-green-500 p-2 text-center">loading...</p>
      )
    }
    return (
        <>
            <div className="bg-red-500">fjsadkjds</div>
            <p>RecipeList</p>
            {data && (
              <ul>
                {data && data.map(recipe => (
                  <li key={recipe.id}>{recipe?.title}</li>
                ))}
              </ul>
            )}
        </>
    )
}