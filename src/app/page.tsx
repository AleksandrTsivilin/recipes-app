import getQueryClient from "@/utils/getQueryClient";
import { RecipeList } from "./components/RecipeList";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/utils/hydrate.client";
import { mealInfoCollection } from "@/data";
import { ALL_RECIPES } from "@/constants/queryKeys";


function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const getRecipes = async () => {
  return wait(300)
  .then(_ => {
    return mealInfoCollection;
  });
}

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([ALL_RECIPES], getRecipes);
  const dehydratedState = dehydrate(queryClient);

  
  return (
    <main>
      <p>Home page</p>
      <Hydrate state={dehydratedState}>
        <RecipeList />
      </Hydrate>
    </main>
  )
}
