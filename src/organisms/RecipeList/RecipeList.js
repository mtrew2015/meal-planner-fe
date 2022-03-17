import { RecipeCard } from '../RecipeCard/RecipeCard'
import {useRecipeList} from './useRecipeList'

export const RecipeList = () => {

  const {recipes, loading} = useRecipeList()

  console.log(recipes)

  return (
    <div>
      {recipes.map((recipe) => <RecipeCard recipe={recipe}/> )}
    </div>
  )

}